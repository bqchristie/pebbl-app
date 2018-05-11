<template>
  <div>
    <h1>Projects</h1>
    <ul>
      <li v-for="project in projects">
        {{ project.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'Root',
    computed: {
      ...mapGetters(['projects']),
    },
    created() {
      this.$store.dispatch('listProjects');
    },
  }
</script>

<style scoped>

</style>
