<template>
  <div class="home container mt-4">
    <h1 class="page-header">Manage Users</h1>
    <table class="table table-striped mt-4">
      <thead>
        <tr>
          <th>Email</th>
          <th>Username</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td> {{user.email}} </td>
          <td> {{user.username}} </td>
          <td><router-link class="btn btn-success" v-bind:to="'/user/'+user.username">View</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'Home',
  components: {
  },
  computed: {
    ...mapGetters({'users': 'getUsers'})
  }
}
</script>
