<template lang="html">
<section class="analytics">
    <v-row>
        <v-col cols="5">
            <Socials :socials="analytics.platforms" />
            <TopItems :items="analytics.topGroups" class="mt-5" title="top_groups" />
        </v-col>
        <v-col cols="6">
            <Countries />
        </v-col>
    </v-row>

    <v-row>
        <Sessions />
    </v-row>

    <v-row>
        <v-col>
            <TopItems :items="analytics.topUsers" title="top_users" />
        </v-col>
        <v-col>
            <Trafics />
        </v-col>
        <v-col>
            <Types :types="analytics.types" />
        </v-col>
    </v-row>
</section>
</template>

<script lang="js">
import Socials from '../components/Analytics/Socials'
import TopItems from '../components/Analytics/TopItems'
import Countries from '../components/Analytics/Countries'
import Sessions from '../components/Analytics/Sessions'
import Trafics from '../components/Analytics/Trafics'
import Types from '../components/Analytics/Types'
import TopUsers from '../components/Overview/NewItems'
export default {
    name: 'analytics',
    components: {
        Socials,
        Countries,
        Sessions,
        Trafics,
        Types,
        TopItems
    },
    props: [],
    mounted() {
        this.$store.dispatch('loadAnalytics')
    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

        analytics() {
            return this.$store.getters.analytics
        }
    }
}
</script>

<style lang="scss" scoped>
.analytics {}
</style>
