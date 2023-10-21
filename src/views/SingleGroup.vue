<template lang="html">
<section class="single-group">
    <v-col cols="9">
        <v-row class="align-center">

            <v-avatar class="ma-3">
                <v-img :src="group.image" v-if="group.image"></v-img>
                <v-icon v-if="!group.image">mdi-account-group</v-icon>
            </v-avatar>
            <h1>{{group.name}}</h1>
            <v-spacer></v-spacer>
            <v-autocomplete label="צירוף חברים חדשים לקבוצה" :items="unattachedMembers" item-text="name" item-value="id" multiple chips v-model="newMembers"></v-autocomplete>
            <v-btn color="primary" @click="attach">צרף לקבוצה</v-btn>
        </v-row>
    </v-col>
    <v-row>
        <v-col cols="2">
            <Details :group="group" />
        </v-col>
        <v-col cols="7">
            <Table v-model="selectedUser" :users="group.users" />
        </v-col>
        <v-col cols="3">
            <Profile :user="selectedUser" />
        </v-col>
    </v-row>
</section>
</template>

<script lang="js">
import Table from '../components/SingleGroup/Table'
import Profile from '../components/Users/Profile'
import Details from '../components/SingleGroup/Details'
export default {
    name: 'single-group',
    components: {
        Table,
        Profile,
        Details
    },
    props: [],
    mounted() {

        this.$store.dispatch('loadUnattachedMembers')
            .then(res => this.unattachedMembers = res.data)
        this.$store.dispatch('fetchGroup', this.$route.params.group)
            .then(res => this.group = res.data)
    },
    data() {
        return {
            selectedUser: {},
            group: {},
            unattachedMembers: [],
            newMembers: []
        }
    },
    methods: {
        attach() {
            this.$store.dispatch('attachToGroup', {id: this.$route.params.group, members: this.newMembers})
                .then(res => this.group = res.data)
            this.newMembers = []
        }
    },
    computed: {
    }
}
</script>

<style lang="scss" scoped>
.single-group {}
</style>
