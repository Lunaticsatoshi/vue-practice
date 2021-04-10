import { createStore } from "vuex";
import {getUsers, setUsers} from './localStorage'

export default createStore({
  state: {
    userList: getUsers(),
    taskList: ["Add Water to plants", "Watch Hentai", "Shit post on Twitter"]
  },
  getters: {
    getUsers: (state) => state.userList,
    getTasks: (state) => state.taskList
  },
  mutations: {
    addUser(state, payload){
      const users = [...state.userList, payload]
      state.userList = users
    }
  },
  actions: {
    async addUser({commit}, user){
      const allUsers = getUsers();
      const users = JSON.stringify([...allUsers, user]);
      setUsers(users);
      commit("addUser", user)
    }
  },
  modules: {},
});
