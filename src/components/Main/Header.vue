<template lang="html">
<section class="header">
    <v-app-bar app color="white" dark>
            <v-img class="shrink mr-2" contain src="../../assets/images/logo.svg" transition="scale-transition" />

        <v-spacer></v-spacer>
        <v-autocomplete hide-details :label="$t('search')" light flat solo-inverted prepend-inner-icon="mdi-magnify"></v-autocomplete>
        <v-spacer></v-spacer>
        <v-btn icon color="grey">
            <v-icon>mdi-mail</v-icon>
        </v-btn>
        <v-btn icon color="grey">
            <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-avatar> <img :src="user && user.avatar" :alt="user.name"></v-avatar>

    </v-app-bar>

</section>
</template>

<script lang="js">
export default {
    name: 'header-component',
    props: [],
    mounted() {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
        user(){
            return this.$store.getters.user
        }
    }
}
</script>

<style lang="scss" scoped>
.header {}
</style>
