<template lang="html">
<section class="mission-details">
    <v-card class="pa-5">
        <v-card-title>{{$t('mission_details')}}</v-card-title>

        <v-row>
            <v-col cols="4">
                <v-text-field :label="$t('publish_date')" type="date" filled v-model="mission.publishDate"></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-text-field :label="$t('deadline_date')" type="date" :min="minDate" filled v-model="mission.deadlineDate"></v-text-field>
            </v-col>
        </v-row>
        <v-tabs flat v-if="mission.details">
            <v-tabs-slider></v-tabs-slider>

            <v-tab v-for="lang in languages" :key="lang.id" :href="`#tab-${lang.id}`">
                {{ lang.name }}
            </v-tab>
            <v-tab-item v-for="lang in languages" :key="lang.id" :value="'tab-' + lang.id">
                <v-card flat tile>
                    <MissionDetailsTab :lang="lang.language"/>
                </v-card>
            </v-tab-item>
        </v-tabs>
        <UploadImage v-model="mission.screenshot"/>

        <v-col cols="4">
            <!--<v-autocomplete  item-value="id" chips multiple :items="tags" item-text="name" :label="$t('tags')" outlined v-model="mission.tags"></v-autocomplete>-->
            <v-autocomplete deletable-chips ref="el" hide-selected hide-no-data :items="mission.tags" @update:search-input="input" outlined class="ma-5" :label="$t('tags')" chips multiple v-model="mission.tags"></v-autocomplete>
        </v-col>
        <v-btn :outlined="!!happy" class="ma-3" :color="happy ? 'grey' : 'primary'" @click="happy = false">
            {{$t('against')}}</v-btn>
        <v-btn :outlined="!happy" :color="happy ? 'primary' : 'grey'" @click="happy = true">{{$t('support')}}</v-btn>
    </v-card>
</section>
</template>

<script lang="js">
import MissionDetailsTab from './MissionDetailsTab'
import UploadImage from './UploadImage'

export default {
    name: 'mission-details',
    components: {
        MissionDetailsTab,
        UploadImage
    },
    beforeMount() {
    },
    data() {
        return {
            file: null,
            happy: false,
        }
    },
    methods: {
        input(s) {
            if (!s || !s.includes(" ")) return
            console.log(this.mission);
            if(!! this.mission.tags == false) {
                this.mission.tags = [];
            }
            console.log(this.mission);
            this.mission.tags.push(s) //.split(" ").slice(0, -1)
            this.$refs.el.lazySearch = '' 
        }
    },
    computed: {
        tags() {
            return this.$store.getters.tags.length ? this.$store.getters.tags : [];
        },
        mission(){
            return this.$store.getters.currentMission;
        },
        languages(){
            return this.$store.getters.languages;
        },
        langandmission(){
            return this.mission.id + this.languages.length
        },
        minDate() {
            let date = new Date();
            date.setDate(date.getDate() + 1);
            return date.toISOString().split("T")[0];
        }
    },
    watch:{
        'happy'(){
            this.mission.happy = this.happy;
        },
        'mission'(){
            this.happy = this.mission.happy
        },
        'langandmission'(){
            this.mission.details = this.mission.details || {};
            this.languages.length && this.languages.forEach(element => {
                if(!this.mission.details[element.language]?.body &&
                   !this.mission.details[element.language]?.title){
                    this.mission.details[element.language] = {}
                }
            });
        }
    }

}
</script>

<style lang="scss" scoped>
.mission-details {}

</style>
