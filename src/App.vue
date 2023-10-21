<template>
    <router-view></router-view>
</template>

<script>

import firebase from 'firebase/compat/app'
export default {
    name: 'App',
    mounted() {
        console.log(location.host);
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.$store.dispatch('userlogin', user)
                    .then(() => {
                        if (this.$store.getters.user.id) {
                            this.$router.push(this.$route.query.redirect || "/overview")
                        }
                    })
            } else if (this.$route.path != "/") {
                this.$router.push("/")
            }
        }
        )
    },
    components: {

    },

    data: () => ({
        //
    })
};
</script>

<style>
</style>

