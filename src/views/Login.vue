<template lang="html">
<section class="login">
    <v-row>
        <v-col>
            <Form />
        </v-col>
        <v-col>
            <v-img src="../assets/images/bg_login.jpg" />
        </v-col>

    </v-row>
</section>
</template>

<script lang="js">
import Form from '../components/Login/Form'
export default {
    name: 'login',
    props: [],
    components: {
        Form
    },
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
.login {}
</style>
