import { createStore } from 'vuex'

const url = "https://uselessfacts.jsph.pl/random.json";
const headers = { Accept: "application/json" };

export default createStore({
  state: {
    currentFact: 'This Is a Fact',
    allFacts: []
  },
  getters: {
    getCurrentFact: (state) => state.currentFact,
    getAllFacts: (state) => state.allFacts
  },
  mutations: {
    setCurrentFact(state,payload){
      state.currentFact = payload;
      state.allFacts.push(payload)
    }
  },
  actions: {
    async setCurrentFact({commit}){
      let factResponse = await fetch(url, {headers})
      let fact = await factResponse.json();
      commit("setCurrentFact", fact.text)

    }
  },
  modules: {
  }
})
