<template lang="html">

  <section class="mission-details-tab">
       <v-col v-if="mission.details[lang]">
            <v-text-field :label="$t('post_title')" filled v-model="mission.details[lang].title" @input="fieldChanged"></v-text-field>
            
            <tiptap-vuetify
                  v-model="mission.details[lang].body"
                  @input="fieldChanged"
                  :placeholder="$t('about_this_mission')"
                  :extensions="extensions"
                />

        </v-col>

  </section>

</template>

<script>

import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History } from 'tiptap-vuetify'


  export default  {
    name: 'mission-details-tab',
    components: { TiptapVuetify },
    props: [
        "lang"
    ],
    mounted() {

    },
    data() {
      return {
        extensions: [
              History,
              Blockquote,
              Link,
              Underline,
              Strike,
              Italic,
              ListItem,
              BulletList,
              OrderedList,
              [Heading, {
                options: {
                  levels: [1, 2, 3]
                }
              }],
              Bold,
              Code,
              HorizontalRule,
              Paragraph,
              HardBreak
            ]
      }
    },
    methods: {
        fieldChanged(){
            this.$store.commit('setMission', this.mission)
        }
    },
    computed: {
        mission(){
            return this.$store.getters.currentMission;
        }
    }
}
</script>

<style scoped lang="scss">
  .mission-details-tab {

  }

  .tiptap-vuetify-editor .ProseMirror  {
    resize: vertical;
    min-height: 200px;
    overflow: auto;
  }
</style>

<style>
.tiptap-vuetify-editor .ProseMirror  {
    resize: vertical;
    min-height: 200px;
    overflow: auto;
  }
</style>
