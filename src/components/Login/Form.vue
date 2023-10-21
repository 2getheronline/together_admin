<template lang="html">
<section class="form">
    <link type="text/css" rel="stylesheet" href="bower_components/firebaseui/dist/firebaseui.css" />
    <div id="firebaseui-auth-container" />
</section>
</template>

<script lang="js">
import 'firebaseui/dist/firebaseui.css'
import firebase from "firebase/compat/app";
var firebaseui = require('firebaseui');
export default {
    name: 'form-component',
    props: [],
    mounted() {
        var vue = this;

        var ui = firebaseui.auth.AuthUI.getInstance() ||
            new firebaseui.auth.AuthUI(firebase.auth());

        ui.start('#firebaseui-auth-container', {
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            ],
            callbacks: {
                signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                    return false;
                }
            },
        });
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
.form {}
</style>
