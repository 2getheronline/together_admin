<template lang="html">
<section class="profile mr-5">
    <v-card v-if="user.id">
        <div class="d-flex head">
            <v-avatar size="170" class=" mt-5">
                <v-img :src="user && user.avatar"></v-img>
            </v-avatar>
            <v-card-title>{{user.name}}</v-card-title>
            <v-card-subtitle>{{user.level.name}}</v-card-subtitle>
            <v-row>
                <v-col cols="6">
                    <v-btn dark class="ma-4" block @click="block" v-if="!user.status">{{$t('block')}}</v-btn>
                    <v-btn dark class="ma-4" block @click="block" v-else>{{$t('unblock')}}</v-btn>
                </v-col>
                <v-col cols="6">
                    <v-btn outlined class="ma-4" block  @click="manager">{{$t('make_manager')}}</v-btn>
                </v-col>
            </v-row>
        </div>

        <v-tabs flat>
            <v-tabs-slider></v-tabs-slider>

            <v-tab key="activity" href="#tab-activity">
                {{ $t('activity') }}
            </v-tab>
            <v-tab key="details" href="#tab-details">
                {{ $t('details') }}
            </v-tab>

            <v-tab-item key="activity" value="tab-activity">
                <v-card flat tile>
                    <Activity :activities="activities" />
                </v-card>
            </v-tab-item>
            <v-tab-item key="details" value="tab-details">
                <v-card flat tile>
                    <Details :user="user" />
                </v-card>
            </v-tab-item>
        </v-tabs>
    </v-card>
</section>
</template>

<script lang="js">
import Activity from './Activity'
import Details from './Details'
export default {
    name: 'profile',
    props: [
        'user'
    ],
    model:{
        'prop': 'user'
    },
    components: {
        Activity,
        Details
    },
    mounted() {

    },
    data() {
        return {
            activities: []
        }
    },
    methods: {
        block(){
            this.$store.dispatch('blockUser', this.user.id)
                .then((res) => this.user = res.data)
        },
        manager(){
            this.$store.dispatch('makeManager', this.user.id)
        }
    },
    computed: {
        // user(){
        //     return this.$store.getters.users.data && this.$store.getters.users.data[0]
        // }
    },
    watch: {
        'user'() {
            this.$store.dispatch('getActivties', this.user.id)
                .then(res => this.activities = res.data)
        }
    }
}
</script>

<style lang="scss" scoped>
.head {
    align-items: center;
    flex-direction: column;
}
</style>
