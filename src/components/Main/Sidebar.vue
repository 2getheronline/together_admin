<template lang="html">
<v-container>
    <v-navigation-drawer color="white" style="margin-top:56px" absolute expand-on-hover permanent>
        <v-list dense nav class="py-0">

            <v-list-item two-line class="px-0">
                <v-list-item-avatar>
                    <img :src="user && user.avatar" :alt="user.name">
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>{{user.name}}</v-list-item-title>
                    <v-list-item-subtitle>{{user.level && user.level.name}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action @click="logout">
                    <v-icon>mdi-logout</v-icon>
                </v-list-item-action>
            </v-list-item>

            <v-divider></v-divider>
            <v-list-item v-for="item in items" :key="item.title" link :to="{name:item.title}">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</v-container>
</template>

<script lang="js">
export default {
    name: 'sidebar',
    props: [],
    mounted() {

    },
    data() {
        return {
          active:2,
            items: [{
                    title: this.$t('Overview'),
                    icon: 'mdi-view-dashboard'
                },
                {
                    title: this.$t('Analytics'),
                    icon: 'mdi-google-analytics'
                },
                {
                    title: this.$t('Missions'),
                    icon: 'mdi-help-box'
                }, {
                    title: this.$t('Users'),
                    icon: 'mdi-account-multiple'
                },
                {
                    title: this.$t('Messages'),
                    icon: 'mdi-message-text'
                },
                {
                    title: this.$t('Settings'),
                    icon: 'mdi-cog'
                },
            ],
        }
    },
    methods: {
        logout(){
            this.$store.dispatch('userlogout')
        }
    },
    computed: {

        user(){
            return this.$store.getters.user
        }
    }
}
</script>

<style lang="scss" scoped>
.sidebar {}
</style>
