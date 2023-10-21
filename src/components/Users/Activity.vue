<template lang="html">
<section class="activity">
    <v-list>
        <v-list-item v-for="activity in activities" two-line>
            <v-list-item-avatar tile>
                <v-img v-if="activity.action.icon" :src="activity.action.icon"/>
                <v-icon v-else dark>{{'mdi-check-circle-outline'}}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title>
                    {{activity.action.name}} - {{activity.mission.platform.name}}
                </v-list-item-title>
                <v-list-item-subtitle>
                    {{activity.mission.title}}
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</section>
</template>

<script lang="js">
export default {
    name: 'activity',
    props: [
        'activities'
        
    ],
    mounted() {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.activity {}
</style>
