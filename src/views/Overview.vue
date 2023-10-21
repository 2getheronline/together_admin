<template lang="html">
<section class="overview pa-10">
    <v-row class="justify-space-between">
        <v-col>
            <Summary :count="overview.activeMissions" title="active_missions"/>
        </v-col>
        <v-col>
            <Summary :count="overview.users" title="users"/>
        </v-col>
        <v-col>
            <Summary :count="overview.groups" title="groups" />
        </v-col>
    </v-row>
    <v-row >
        <v-col cols="4">
            <LastComplete :missions="overview.last_completed"/>
        </v-col>
        <v-col cols="8">
            <Failed :missions="overview.faileds"/>
        </v-col>
    </v-row>
    <v-row class="justify-space-between">
        <v-col cols="4">
            <Missions :missions="overview.missionSum"/>
        </v-col cols="4">
        <v-col cols="4">
            <NewItems :items="overview.newUsers"  title="new_users"/>
        </v-col>
        <v-col cols="4">
            <NewItems :items="overview.newMessages" title="new_messages"/>
        </v-col>
    </v-row>
</section>
</template>

<script lang="js">
import Summary from '../components/Overview/Summary'
import LastComplete from '../components/Overview/LastComplete'
import Failed from '../components/Overview/Failed'
import NewItems from '../components/Overview/NewItems'
import Missions from '../components/Overview/Missions'
export default {
    name: 'overview',
    props: [],
    components: {
        Summary,
        LastComplete,
        NewItems,
        Missions,
        Failed
    },
    mounted() {
        this.$store.dispatch('loadOverview');
    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
        overview(){
            return this.$store.getters.overview
        }
    }
}
</script>

<style lang="scss" scoped>
.overview {}
</style>
