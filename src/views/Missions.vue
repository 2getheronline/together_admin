<template lang="html">
<section class="missions">
    <v-row>
        <v-col cols="8">
            <v-row>
                <h1>Missions Management</h1>
                <p class="ml-5 pt-2">Total {{missions.total}}</p>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="newMessage">
                    <v-icon>mdi-plus</v-icon> New Mission
                </v-btn>
            </v-row>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="8">
            <Table :missions="missions.data" :count="missions.total" @pagination="paginate"/>
        </v-col>
        <v-col cols="4">
            <FilterComponent :filter="filter" @change="filterChanged"/>
        </v-col>
    </v-row>
    <v-btn absolute fab bottom right color="primary" @click="newMessage">
        <v-icon>mdi-plus</v-icon>
    </v-btn>
</section>
</template>

<script lang="js">
import Table from '../components/Missions/Table'
import FilterComponent from '../components/Missions/Filter'
export default {
    name: 'missions',
    props: [],
    components: {
        Table,
        FilterComponent
    },
    mounted() {
    },
    data() {
        return {
            filter: {
                page:1
            }
        }
    },
    methods: {
        newMessage() {
            this.$router.push('/missions/create')
        },
        paginate(data){
            this.filter.page = data.page
            this.$store.dispatch('loadMoreMissions',  this.filter);
        },
        filterChanged(){
            this.$store.dispatch('loadMoreMissions', this.filter)
        }
    },
    computed: {
        missions() {
            return this.$store.getters.missions;
        }
    }
}
</script>

<style lang="scss" scoped>
.missions {}
</style>
