import { createStore } from 'vuex'

export default createStore({
  state: {
    currentFact: '',
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
      const factResponse = await fetch('https://uselessfacts.jsph.pl/random.json')
      const fact = factResponse.json();
      commit("setCurrentFact", fact.text)

    }
  },
  modules: {
  }
})
