import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    set: null
  },
  actions: {
    ADD_SET({
      commit,
      data
    }) {
      commit('addSet', data)
    }
  },
  mutations: {
    addSet(state, data) {
      state.set = data
    }
  },
  getters: {
    set(state) {
      return state.set
    }
  }
})

export default store
