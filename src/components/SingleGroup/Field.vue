<template lang="html">

  <section class="field">
    <v-list-item two-line >
                <v-list-item-content>
                    <v-list-item-subtitle>
                        {{$t(field.field)}}
                    </v-list-item-subtitle>
                    <v-list-item-title>
                        {{field.name}}
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'field',
    props: [
        'field'
    ],
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

<style scoped lang="scss">
  .field {

  }
</style>
