<template lang="html">

  <section class="groups">
      <v-row class="justify-center">
    <Tree/>
    </v-row>
  </section>

</template>

<script lang="js">
import Tree from '../components/Groups/Tree'
  export default  {
    name: 'groups',
    components: {
        Tree
    },
    props: [],
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
  .groups {

  }
</style>
