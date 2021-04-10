import { createStore } from "vuex";
import { getUsers, setUsers } from "./localStorage";

export default createStore({
  state: {
    userList: getUsers(),
    taskList: [
      { title: "Add Water to plants" },
      { title: "Watch Hentai" },
      { title: "Shit post on Twitter" },
    ],
  },
  getters: {
    getUsers: (state) => state.userList,
    getTasks: (state) => state.taskList,
  },
  mutations: {
    addUser(state, payload) {
      const users = state.userList.filter(user => user.username !== payload.username);
      state.userList = [...users, payload];
    },
  },
  actions: {
    async addUser({ commit }, user) {
      const allUsers = getUsers();
      const newUsers = allUsers.filter(
        (users) => users.username !== user.username
      );
      const users = JSON.stringify([...newUsers, user]);
      setUsers(users);
      commit("addUser", user);
    },
  },
  modules: {},
});
