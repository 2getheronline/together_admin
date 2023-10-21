<template lang="html">
<section class="action">
    <v-card class="pa-5">
        <v-card-title>{{$t('actions')}}</v-card-title>
        <v-btn v-for="act in actions" outlined class="ma-2" @click="selectAction(act)" :outlined="!hasAction(act)" :color="hasAction(act) ? 'primary' : ''">{{act.name}}</v-btn>

        <div >
            <p>{{$t('auto_comments')}}</p>
            <v-text-field v-for="comment in mission.comments" :label="$t('comment')" filled v-model="comment.value">
                <template v-slot:append >
             <v-icon @click="clear(comment)">mdi-close</v-icon>
            </template>
            </v-text-field>
            <v-row>

                <v-btn outlined class="ma-5" @click="addComment">
                    <v-icon>mdi-plus</v-icon>{{$t('add_comment')}}
                </v-btn>
            </v-row>
        </div>
    </v-card>
</section>
</template>

<script lang="js">
import {
    xor
} from 'lodash';
export default {
    name: 'action',
    mounted() {
        this.mission.actions = []
    },
    data() {
        return {}
    },
    methods: {
        selectAction(act) {
            this.mission.actions = xor([act.id], this.mission.actions)
            this.$store.commit('setMission', this.mission)
        },
        addComment() {
            this.mission.comments = this.mission.comments || [];
            this.mission.comments.push({
                value: ""
            })
            this.$store.commit('setMission', this.mission)
        },
        clear(c) {
            console.log(c);
            if (!c) return;
            this.mission.comments = this.mission.comments.filter(x =>  x.value != c.value)
            this.$store.commit('setMission', this.mission)
        },
        hasAction(act) {
            return this.mission.actions?.includes(act.id)
        }
    },
    computed: {
        mission() {
            return this.$store.getters.currentMission;
        },
        actions(){
            let platformActions = {
                1: [1,2,3,4], // Facebook
                //2: [], // Google
                3: [1,2,3,4,6], // Youtube
                4: [1,2,3], // Instagram
                5: [1,2,3,7], // Twitter
            };
            let allActions = this.$store.getters.actions;
            if(this.mission.platformId > 0 && platformActions.hasOwnProperty(this.mission.platformId))
                return allActions.filter((action) => platformActions[this.mission.platformId].indexOf(action.id) >= 0);
            else
                return allActions;

        }
    },
    watch: {
        'mission.proposedComments'() {
            if (!this.mission.comments) {
                this.mission.comments = this.mission.proposedComments?.map(x => {
                    return {
                        value: x
                    }
                })
                this.$store.commit('setMission', this.mission)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.action {}
</style>
