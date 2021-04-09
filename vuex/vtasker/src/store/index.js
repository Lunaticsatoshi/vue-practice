import { createStore } from "vuex";
import {getUsers, setUsers} from './localStorage'

export default createStore({
  state: {
    userList: getUsers(),
  },
  getters: {
    getUsers: (state) => state.userList
  },
  mutations: {
    addUser(state, payload){
      const users = [...state.userList, payload]
      state.userList.push(users)
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
