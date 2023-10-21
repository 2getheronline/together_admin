<template lang="html">
<section class="types">
    {{data}}
    <GChart type="PieChart" :data="firstData" :options="chartOptions"  class="first"/>
    <GChart type="PieChart" :data="secondData" :options="chartOptions" class="second"/>
</section>
</template>

<script lang="js">
export default {
    name: 'types',
    props: [
        'types'
    ],
    mounted() {

    },
    data() {
        return {
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

    },
    computed: {
        firstData() {
            return this.types && [
                    ["", ""]
                ]
                .concat(this.types
                .filter(x=>x.happy == 0)
                .map(x => [this.$store.getters.statuses[x.status].label, x.count ]))
        },
        secondData() {
            return this.types && [
                    ["", ""]
                ]
                .concat(this.types
                .filter(x=>x.happy == 1)
                .map(x => [this.$store.getters.statuses[x.status].label, x.count ]))
        }

    }
}
</script>

<style lang="scss" scoped>
.types {
    position: relative;
}
.chart {
}

.first {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 450px;
    width: 450px;
}

.second {
    position: absolute;
    top: 150px;
    left: 110px;
    height: 150px;
    width: 150px;
}
</style>
