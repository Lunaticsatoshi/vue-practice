<template>
  <div class="Tasks container">
    <router-link to="/" class="btn btn-primary mt-4">Back</router-link>
    <h1 class="page-header mt-4">Task List</h1>
    <form class="row align-items-center mb-4" @submit.prevent="addNewTask">
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

    <Tasks />

  </div>
</template>

<script>
import Tasks from '../components/Tasks';
import { mapActions } from "vuex";
export default {
  name: "TaskList",
  components: {
      Tasks
  },
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["setTask","addTask"]),
    addNewTask(){
        let newTask = {
            username: this.$route.params.username,
            task: {
                title: this.title
            }
        }
        console.log(newTask);
        this.$router.push("/");
        this.addTask(newTask);
    }
  },
  mounted() {
    this.setTask(this.$route.params.username);
  },
};
</script>

<style>
</style>