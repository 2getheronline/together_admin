<template lang="html">
    <section class="edit-mission">
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-col cols="10">
                <v-text-field :label="$t('new_mission')" v-model="mission.name" :rules="nameRules" class="col-4"></v-text-field>

                <MissionDetails class="mb-7" />
                <Platform class="mb-7" />
                <Action class="mb-7" />
                <Users class="mb-7" />
                <v-alert type="error" v-if="!valid">Please all fields, fill at least one language And select Platform and Action</v-alert>
                <v-row v-if="finished">
                    <v-spacer></v-spacer>
                    <v-btn outlined @click="save(false)" class="ma-5">{{$t('save_draft')}}</v-btn>
                    <v-btn color="primary"  @click="save(true)" class="ma-5">{{$t('publish_mission')}}</v-btn>
                    <v-spacer></v-spacer>
                </v-row>

            </v-col>
        </v-form>
    </section>
</template>

<script lang="js">
import MissionDetails from '../components/EditMission/MissionDetails'
import Platform from '../components/EditMission/Platform'
import Action from '../components/EditMission/Action'
import Users from '../components/EditMission/Users'

export default {
    name: 'edit-mission',
    components: {
        MissionDetails,
        Platform,
        Action,
        Users
    },
    props: [],
    mounted() {


        if (this.isEdit) {
            this.$store.dispatch('loadMission', this.$route.params.id)
        } else {
            var d = new Date();
            var dPlusMonth = new Date();
            dPlusMonth.setDate(dPlusMonth.getDate() + 30);

            this.$store.commit('setCurrentMission', {
                publishDate: d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2),
                deadlineDate: dPlusMonth.getFullYear() + "-" + ("0" + (dPlusMonth.getMonth() + 1)).slice(-2) + "-" + ("0" + dPlusMonth.getDate()).slice(-2),
                points: 10,
                limit: 1000
            })
        }
    },
    data() {
        return {
            valid: false,
            nameRules: [
                v => !!v || 'Name is required'
            ],
        }
    },
    methods: {
        validateMission() {
            return this.$refs.form.validate() &&
                    this.mission.platformId &&
                    this.mission.actions &&
                    this.mission.image && 
                    this.mission.url && 
                    this.mission.details && 
                    Object.values(this.mission.details).find((x) => x && x.title && x.body)
        },
        save(publish) {
            if (publish && !this.validateMission()) {
                this.valid = false;
                return
            }
            this.mission.status = publish ? 2 : 1;
            this.mission.proposedComments = this.mission.comments?.map(x => x.value)

            if (this.isEdit) {
                this.$store.dispatch('editMission')
                    .then(() => this.$router.push('/missions'))

            } else {
                this.$store.dispatch('newMission')
                    .then(() => this.$router.push('/missions'))
            }


        }
    },
    computed: {
        mission() {
            return this.$store.getters.currentMission;
        },
        isEdit() {
            return !!this.$route.params.id
        },
        finished() {
            return !this.mission.status || this.mission.status <= 2
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
