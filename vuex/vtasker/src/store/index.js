import { createStore } from "vuex";
import { getUsers, setUsers, getTasks, setTasks } from "./localStorage";

export default createStore({
  state: {
    userList: getUsers(),
    taskList: [],
  },
  getters: {
    getUsers: (state) => state.userList,
    getTasks: (state) => state.taskList,
  },
  mutations: {
    addUser(state, payload) {
      const users = state.userList.filter(
        (user) => user.username !== payload.username
      );
      state.userList = [...users, payload];
    },

    addTask(state, payload) {
      state.taskList = [...state.taskList, payload];
    },
  },
  actions: {
    async addUser({ commit }, user) {
      const allUsers = getUsers();
      const newUsers = allUsers.filter(
        (users) => users.username !== user.username
      );
      const users = JSON.stringify([...newUsers, user]);
      const task = {
        username: user.username,
        tasks: []
      }
      const alltasks = getTasks();
      const newTasks = alltasks.filter(task => task.username !== user.username)
      const tasks = JSON.stringify([...newTasks, task]);

      setUsers(users);
      setTasks(tasks);
      commit("addUser", user);
    },

    async addTask({ commit }, { username, task }) {
      const alltasks = getTasks();
      alltasks.find((a) => a.username === username).tasks.push(task);
      const taskList = allTasks.filter((tasks) => tasks.username === username);
      setTasks(JSON.stringify(alltasks));
      commit("addTask", taskList);
    },

    async getTasks({ commit }, username) {
      const allTasks = getTasks();
      const taskList = allTasks.filter((tasks) => tasks.username === username);
      commit("addTask", taskList);
    },
  },
  modules: {},
});
