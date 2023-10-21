<template lang="html">
<section>
    <v-card class="missions pa-1">
        <v-row>
            <v-card-text class="col">{{$t('missions')}}</v-card-text>
            <v-overflow-btn class="col" outlined :items="years" v-model="year"></v-overflow-btn>
        </v-row>
        <v-row class="justify-space-around">
            <v-col md="3">
                <v-card-title>{{succeded}}</v-card-title>
                <v-icon color="primary" small>mdi-circle</v-icon>{{$t('succeded')}}

            </v-col>
            <v-col md="3">
                <v-card-title>{{failed}}</v-card-title>
                <v-icon color="error" small>mdi-circle</v-icon>{{$t('failed')}}
            </v-col>
        </v-row>

        <GChart v-if="data" type="ColumnChart" :data="data" :options="chartOptions" class="second" />
    </v-card>
</section>
</template>

<script lang="js">
export default {
    name: 'missions',
    props: [
        'missions'
    ],
    mounted() {

    },
    data() {
        return {
            year: '2019',
            chartOptions: {
                pieHole: 0.85,
                backgroundColor: "transparent",
                chart: {
                    title: 'Company Performance',
                    subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                }
            }
        }
    },
    methods: {
        sum(status) {
            return this.missions
                .filter(x => x.year == this.year)
                .map(x => parseInt(x[status]))
                .reduce((t, x) => t + x)
        }
    },
    computed: {
        years() {
            return this.missions && this.missions.map(x => x.year)
        },
        failed() {
            return this.missions && this.sum("failed")
        },

        succeded() {
            return this.missions && this.sum("completed")
        },
        data() {
            return this.missions && [
                ["month", "completed", "failed"]
            ].concat(
                this.missions
                .filter(x => x.year == this.year)
                .map(x => [
                    x.month,
                    parseInt(x.completed),
                    parseInt(x.failed)
                ]))
        }
    }
}
</script>

<style lang="scss" scoped>
.missions {
    height: 400px;
}
</style>
