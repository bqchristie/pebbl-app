<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Login</h2>
    <ul>
      <li>
        <router-link to="/login" >Login</router-link>
      </li>

    </ul>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Pebbl',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
