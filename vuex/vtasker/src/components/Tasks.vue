<template>
  <div>
    <div v-for="task in tasks" :key="task.id">
      <ul class="list-group" v-for="atask in task.tasks" :key="atask.id">
        <li class="list-group-item mt-2">{{ atask.title }}</li>
      </ul>
    </div>
    <!-- <ul class="list-group" v-for="task in tasks" :key="task.id">
      <li class="list-group-item mt-2">{{ task.tasks[0] }}</li>
    </ul> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Tasks",
  computed: {
    ...mapGetters({ tasks: "getTasks" }),
  },
};
</script>

<style>
</style>