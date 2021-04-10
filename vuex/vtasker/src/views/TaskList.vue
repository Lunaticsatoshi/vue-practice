<template>
  <div class="Tasks container">
    <router-link to="/" class="btn btn-primary mt-4">Back</router-link>
    <h1 class="page-header mt-4">Task List</h1>
    <form class="row align-items-center mb-4">
      <div class="col-md-8 col-sm-12">
        <div class="input-group">
          <input
            type="text"
            placeholder="Task"
            v-model="title"
            class="form-control"
          />
        </div>
      </div>

      <div class="col-md-4 col-sm-12">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>

    <ul class="list-group" v-for="task in tasks" :key="task.id">
      <li class="list-group-item mt-2">{{ task.title }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TaskList",
  data() {
    return {
      title: "",
    };
  },
  computed: {
    ...mapGetters({ tasks: "getTasks" }),
  },
};
</script>

<style>
</style>