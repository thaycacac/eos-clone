import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    sets: [],
    server: '',
    total: 0,
    exam_code: '',
    student: '',
    font_size: 15,
    font_family: 'Microsoft Sans Serif',
    is_finish: false,
    is_show_modal: false,
    selected_question: 1,
    mode: 'learn',
    is_red: false,
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
    },
    addFontSize(state, data) {
      state.font_size = data
    },
    addFontFamily(state, data) {
      state.font_family = data
    },
    addFinish(state, data) {
      state.is_finish = data
    },
    addShowModal(state, data) {
      state.is_show_modal = data
    },
    addSelectedQuestion(state, data) {
      state.selected_question = data
    },
    addMode(state, data) {
      state.mode = data
    },
    addRed(state, data) {
      state.is_red = data
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
    },
    font_size(state) {
      return state.font_size
    },
    font_family(state) {
      return state.font_family
    },
    is_finish(state) {
      return state.is_finish
    },
    is_show_modal(state) {
      return state.is_show_modal
    },
    selected_question(state) {
      return state.selected_question
    },
    mode(state) {
      return state.mode
    },
    is_red(state) {
      return state.is_red
    }
  }
})

export default store
