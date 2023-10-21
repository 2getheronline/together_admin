<template lang="html">
<section class="failed">
    <v-card>
        <v-card-text>{{$t('outdated_failed_messions')}}</v-card-text>
        <v-list>
            <v-card v-for="mission in missions" outlined class="ma-3">
                <v-list-item>
                    <v-row>
                        <v-col cols="1">
                            <v-list-item-subtitle>#{{mission.id}}</v-list-item-subtitle>
                        </v-col>
                        <v-col cols="3">
                            <v-list-item-title>{{mission.title}}</v-list-item-title>
                        </v-col>
                        <v-col cols="2">
                            <v-list-item-subtitle>
                                <v-icon color="grey" small>mdi-account</v-icon>{{mission.current}} of {{mission.limit}}
                            </v-list-item-subtitle>
                        </v-col>
                        <v-col cols="3">
                            <v-progress-linear :value="(mission.current / mission.limit) * 100"></v-progress-linear>

                        </v-col>
                        <v-col cols="2">
                            <v-list-item-subtitle>{{formatDate(mission.deadlineDate)}}</v-list-item-subtitle>

                        </v-col>
                        <v-col cols="1">
                            <v-btn text>
                                <v-icon color="grey">mdi-eye</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-list-item>
            </v-card>
        </v-list>

    </v-card>
</section>
</template>

<script lang="js">
import {
    format
} from 'date-fns'
export default {
    name: 'failed-component',
    props: [
        'missions'
    ],
    mounted() {

    },
    data() {
        return {

        }
    },
    methods: {
        formatDate(date) {
            return format(new Date(date), 'yyyy/MM/dd')
        }
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.failed {
    overflow-y: scroll;
    height: 300px;
}
</style>
