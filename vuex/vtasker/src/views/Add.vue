<template>
  <div class="add container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">Add Users</h1>
    <form @submit.prevent="addNewUser">
      <div class="well">
        <h4>Customer Info</h4>
        <div class="form-group">
          <label>Email</label>
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label>Username</label>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            v-model="username"
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary mt-4">Submit</button>
    </form>
  </div>
</template>

<script>
import Alert from '../components/Alert';
import { mapActions } from "vuex";
export default {
  name: "Add",
  components: {
      Alert
  },
  data () {
      return {
          email: '',
          username: '',
          alert: ''
      }
  },

  methods: {
      ...mapActions(["addUser"]),
      async addNewUser(){
          if( !this.email || !this.username){
              this.alert = 'Please fill in all required fields';
          }else{
              let newUser = {
                  username: this.username,
                  email: this.email
              }

              this.addUser(newUser);
          }
      }
  }
};
</script>

<style>
</style>