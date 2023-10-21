<template lang="html">
<section class="single ml-10">
    <v-row class="align-center">
        <v-avatar class="mr-5">
            <v-img :src="message.user.avatar"></v-img>
        </v-avatar>
        {{message.user.name}}
    </v-row>
    <v-row class="mt-5">
        {{fomatDate(message.created_at)}}
    </v-row>
    <v-row class="mt-5">
        <p class="headline">{{message.title}}</p>
    </v-row>
    <v-row class="mt-5">
        <v-col cols="8">
            {{message.content}}
        </v-col>

    </v-row>
    <v-row class="mt-5" v-if="message.link">
        <v-col cols="8">
            <a :href="message.link" target="blank">
            <v-card :loading="loading">
                <v-list-item two-line>
                    <v-list-item-avatar tile size="120">
                        <v-img :src="metaTags.image"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-card-title>{{metaTags.title}}</v-card-title>
                        <v-card-subtitle>{{metaTags.description}}</v-card-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
            </a>
        </v-col>

    </v-row>
    <VDivider/>

</section>
</template>

<script lang="js">
import {
    format
} from 'date-fns'

export default {
    name: 'single',
    props: ['message'],
    mounted() {

    },
    data() {
        return {
            metaTags: {},
            loading: false
        }
    },
    methods: {
        fomatDate(d) {
            return format(new Date(d), 'dd/MM/yy h:mm a')
        }
    },
    computed: {

    },
    watch: {
        'message'() {
            this.metaTags = {}
            this.loading = true

            this.$store.dispatch('fetchMetadata', this.message.link)
                .then(res => {
                    this.metaTags = res.data
                    this.loading = false
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.single {
    a {
        text-decoration: none
    }

}
</style>
