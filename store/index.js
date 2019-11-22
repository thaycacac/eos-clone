import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    sets: [],
    server: '',
    total: 0,
    exam_code: '',
    student: ''
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
    addSets(state, data) {
      state.sets = data
    },
    addServer(state, data) {
      state.server = data
    },
    addTotal(state, data) {
      state.total = data
    },
    addExamCode(state, data) {
      state.exam_code = data
    },
    addStudent(state, data) {
      state.student = data
    }
  },
  getters: {
    sets(state) {
      return state.sets
    },
    server(state) {
      return state.server
    },
    total(state) {
      return state.total
    },
    exam_code(state) {
      return state.exam_code
    },
    student(state) {
      return state.student
    }
  }
})

export default store
