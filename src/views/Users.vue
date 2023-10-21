<template lang="html">
<section class="users">
    <v-col cols="9">
        <v-row class="align-center">
            <h1>{{$t('users_management')}}</h1>
            <p class="ml-5 mt-5">{{users.total}} {{$t('total')}}</p>
            <v-spacer></v-spacer>
            <AddGroupModal />
            <InviteUserModal  class="ml-5"/>
        </v-row>
    </v-col>
    <v-row>
        <v-col cols="9">

            <Groups />

            <Table v-model="selectedUser" :users="users" />
        </v-col>
        <v-col cols="3">
            <Profile :user="selectedUser" />
        </v-col>
    </v-row>
</section>
</template>

<script lang="js">
import Groups from '../components/Users/Groups'
import Table from '../components/Users/Table'
import Profile from '../components/Users/Profile'
import AddGroupModal from '../components/Users/AddGroupModal'
import InviteUserModal from '../components/Users/InviteUserModal'
export default {
    name: 'users',
    props: [],
    components: {
        Groups,
        Table,
        Profile,
        AddGroupModal,
        InviteUserModal
    },
    mounted() {
        this.$store.dispatch('loadGroups')

        if (this.$route.query.user){
            this.$store.dispatch('loadUserById', this.$route.query.user)
            .then(res=>this.selectedUser = res.data)
        }
    },
    data() {
        return {
            selectedUser: {}
        }
    },
    methods: {

    },
    computed: {
        users() {
            return this.$store.getters.users
        }
    }
}
</script>

<style lang="scss" scoped>
.users {
    width: 100%
}
</style>
