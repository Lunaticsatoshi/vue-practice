<template>
  <div class="home">
    <h2 class="text">Get your facts right!!</h2>
    <h3> {{fact}} </h3>

    <button class="add__joke" @click="addFact">Add Fact</button>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters, mapActions} from "vuex"

export default {
  name: "Home",
  components: {},
  computed: {
    ...mapGetters({fact: "getCurrentFact"})
  },
  methods: {
    ...mapActions({addFact: "setCurrentFact"}),
  }
};
</script>

<style scoped>
.home {
  height: 250px;
  max-height: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ddf7f7;
  width: 900px;
  border-radius: 25px;
  box-shadow: 5px 10px #eee2e2;
}
h3 {
  font-size: 1.5rem;
  color: #000000;
}

.add__joke{
  background-color: #07a1fa;
  color: #ffffff;
  font-weight: bold;
  padding: 1rem 3.4rem;
  border-radius: 2.5rem;
  margin-top: 10px;
  border: none;
}

.add__joke:hover{
  background-color: #0f74e7;
}
.add__joke:focus{
  outline: none;
}
.text{
  font-size: 1.5rem;
  font-weight: bolder;
  color: #07a1fa;
}
</style>
