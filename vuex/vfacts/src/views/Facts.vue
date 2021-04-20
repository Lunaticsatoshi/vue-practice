<template>
  <div>
    <h1 class="text__facts"> All Facts Till Now</h1>
    <h4 v-for="(fact,id) in allFacts" :key="id">
      <span>{{id+1}}</span>
      <span>{{fact}}</span>
    </h4>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: "Facts",
  computed: {
    ...mapGetters({allFacts: "getAllFacts"})
  }
};
</script>

<style scoped>
h4 {
  color: blueviolet;
  font-weight: bolder;
  font-size: 1.5rem;
}

.text__facts {
  padding: 12px;
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
