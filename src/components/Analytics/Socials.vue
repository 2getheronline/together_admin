<template lang="html">
<section class="socials">
    <GChart type="PieChart" :data="data" :options="chartOptions" />
</section>
</template>

<script lang="js">
export default {
    name: 'socials',
    props: [
        'socials'
    ],
    mounted() {

    },
    data() {
        return {
            chartOptions: {
          pieHole: 0.85,
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
        data() {
            return this.socials && [
                    ["", ""]
                ]
                .concat(this.socials.map(x => Object.values(x)))
        }
    }
}
</script>

<style lang="scss" scoped>
.socials {}
</style>
