<template>
  <div class="Tasks container">
    <router-link to="/">Back</router-link>
    <!-- <h1 class="page-header">
      {{ customer.first_name }} {{ customer.last_name }}
      <span class="pull-right">
        <router-link class="btn btn-primary" v-bind:to="'/edit/' + customer.id"
          >Edit</router-link
        >
        <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">
          Delete
        </button>
      </span>
    </h1> -->
    <!-- <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-phone" aria-hidden="true"></span>
        {{ customer.phone }}
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
        {{ customer.email }}
      </li>
    </ul> -->

    <ul class="list-group" v-for="task in tasks" :key="task.id">
      <li class="list-group-item">{{ task.title }}</li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
    name: "TaskList",
    computed: {
        ...mapGetters({"tasks": "getTasks"})
    }
};
</script>

<style>
</style>