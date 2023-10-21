<template lang="html">
<section class="details">
    <v-card>
        <v-list>
            <v-list-item two-line v-for="f in fields">
                <v-list-item-content>
                    <v-list-item-subtitle>
                        {{$t(f.field)}}
                    </v-list-item-subtitle>
                    <v-list-item-title class="mt-2">
                        <b>{{f.value}}</b>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <img :src="'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl={&quot;id&quot;:'+group.id+',&quot;password&quot;:&quot;'+group.password+'&quot;}&choe=UTF-8'" style="width:100%" />
        <div style="padding:10px">
            <div>
                <strong>ID: </strong>
                {{ group.id }}
            </div>
            <div>
                <strong>Password: </strong>
                {{ group.password }}
            </div>
        </div>
    </v-card>
</section>
</template>

<script lang="js">
import {
    format
} from "date-fns";
export default {
    name: 'details-com',
    props: [
        'group'
    ],
    mounted() {

    },
    data() {
        return {
            fields: []
        }
    },
    methods: {
        toDate(d) {
            return format(new Date(d), 'dd/MM/yyyy')
        }
    },
    computed: {},
    watch: {
        group(group) {

            this.fields = [{
                    'field': 'id',
                    'value': group.id
                },{
                    'field': 'password',
                    'value': group.password
                },{
                    'field': 'group_managr',
                    'value': group.manager.name
                },
                {
                    'field': 'location',
                    'value': group.manager.address
                },
                {
                    'field': 'active_members',
                    'value': group.users.length + ' of ' + group.users.length
                },
                {
                    'field': 'last_activity',
                    'value': this.toDate(group.updated_at)
                },
                {
                    'field': 'created_date',
                    'value': this.toDate(group.created_at)
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.details {}
</style>
