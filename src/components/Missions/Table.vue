<template lang="html">
<section class="table">

    <v-data-table v-on="$listeners" :headers="headers" :items="missions" :server-items-length="count" :items-per-page="20" class="elevation-1">
        <template v-slot:item.id="{ item }">
            <p></p><b>{{item.name}}</b>
            <p>#{{item.id}}</p>
        </template>
        <template v-slot:item.manage="{ item }">
            <v-btn :to="'/missions/' + item.id + '/edit'" text color="primary">{{$t("manage")}}</v-btn>
        </template>
        <template v-slot:item.progress="{ item }">
           <v-progress-linear :value="(item.current / item.limit) * 100"></v-progress-linear>
        </template>
        <template v-slot:item.user_performance="{ item }">
           {{item.current}} of {{item.limit}}
        </template>
        <template v-slot:item.status="{ item }">

            <v-btn text :color="statuses[item.status].color" @click="publish(item)"> {{statuses[item.status].label}}</v-btn>
        </template>
    </v-data-table>
</section>
</template>

<script lang="js">
import {format} from 'date-fns';
export default {
    name: 'table-component',
    props: [
        'missions',
        "count"
    ],
    mounted() {
    },
    data() {
        return {
            headers: [{
                    text: this.$t('name_and_ID'),
                    value: 'id',
                },
                {
                    text: this.$t('title'),
                    value: 'title'
                },
                {
                    text: this.$t('publish_date'),
                    value: 'publishDate'
                },
                {
                    text: this.$t('deadline_date'),
                    value: 'deadlineDate'
                },
                {
                    text: this.$t('user_performance'),
                    value: 'user_performance'
                },
                {
                    text: this.$t('progress'),
                    value: 'progress'
                },
                {
                    text: this.$t('mission_status'),
                    value: 'status'
                },
                {
                    value: 'manage'
                }
            ]
        }
    },
    methods: {
        publish(mission){
            if (mission.status <= 2){
                this.$store.dispatch('publish', mission)
            }
        }
    },
    computed: {
        statuses(){
            return this.$store.getters.statuses;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
