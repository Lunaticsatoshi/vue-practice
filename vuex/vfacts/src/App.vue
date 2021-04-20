<template>
  <div>
    <div id="nav" class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">Facts</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  methods: {
    ...mapActions["setCurrentFact"]
  },
  mounted() {
    this.setCurrentFact();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 60px;
}
#nav a {
  font-weight: bold;
  font-size: 20px;
  color: #2c3e50;
  text-decoration: none;
}
#nav a.router-link-exact-active {
  color: blue;
}
.nav {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 400px;
}
</style>
