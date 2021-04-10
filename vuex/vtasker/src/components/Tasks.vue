<template>
  <div>
    <ul class="list-group" v-for="task in tasks" :key="task.id">
      <li class="list-group-item mt-2">{{ task.title }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Tasks",
  computed: {
    ...mapGetters({ task: "getTasks" }),
  },
};
</script>

<style>
</style>