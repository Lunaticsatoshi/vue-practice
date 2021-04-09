import { createStore } from "vuex";

export default createStore({
  state: {
    userList: [
      {
        username: "Satoshi",
        email: "redlolicon99@gmail.com"
      },
      {
        username: "Brad",
        email: "bradfor69@gmail.com"
      },
      {
        username: "Lolicon",
        email: "lolilover99@yahoo.com"
      },
    ],
  },
  getters: {
    getUsers: (state) => state.userList
  },
  mutations: {
    addUser(state, payload){
      state.userList.push(payload)
    }
  },
  actions: {
    async addUser({commit}, user){
      commit("addUser", user)
    }
  },
  modules: {},
});
