<template lang="html">
<section class="platform">
    <v-card class="pa-5 mb-7">
        <v-card-title>{{$t('add_url')}}</v-card-title>
        <v-col>
            <v-text-field :label="$t('post_url')" filled v-model="mission.url"></v-text-field>
        </v-col>

    </v-card>
    <v-card class="pa-5 mb-7">
        <v-card-title>{{$t('add_image')}}</v-card-title>
        <v-row>
            <v-col cols="8">
                <v-text-field :label="$t('copy_url')" filled v-model="mission.image"></v-text-field>

            </v-col>
            <v-col cols="4">
                {{$t('or')}}

                <UploadImage v-model="mission.image" />
            </v-col>
        </v-row>
    </v-card>
    <v-card class="pa-5">
        <v-card-title>{{$t('platform')}}</v-card-title>
        <v-btn v-for="plt in platforms" class="ma-5" @click="selectPlt(plt)" :outlined="!isSelectedPlatform(plt)" :color="isSelectedPlatform(plt) ? 'primary' : ''">{{plt.name}}</v-btn>
    </v-card>
</section>
</template>

<script lang="js">
import UploadImage from './UploadImage'
export default {
    name: 'platform',
    components: {
        UploadImage
    },
    mounted() {

    },
    data() {
        return {}
    },
    methods: {
        // selectPlatform: function (sel) {
        //     this.mission.platform = sel
        //     this.mission.actions = []
        //     this.$store.commit('setMission', this.mission)
        // },
        isSelectedPlatform(plt){
            return this.mission?.platformId == plt.id
        },
        selectPlt(plt){
            this.mission.platformId = plt.id;
            this.mission.actions = [];
            this.$store.commit('setMission', this.mission)

        }
    },
    computed: {

        mission() {
            return this.$store.getters.currentMission;
        },
        platforms() {
            return this.$store.getters.platforms
        }
    },
    watch: {
        'mission.platformId'(){
        }
        // 'mission'() {
        //     if (this.mission.actions && this.mission.actions.length) {
        //         this.mission.platform = this.platforms
        //             .find(x => x.actions
        //                 .map(x => x.id).includes(this.mission.actions[0]))
        //     }
        // }
    }
}
</script>

<style lang="scss" scoped>
.platform {}
</style>
