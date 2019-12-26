import Vuex from "vuex";

const store = () =>
  new Vuex.Store({
    state: {
      sets: [],
      server: "",
      total: 0,
      exam_code: "",
      student: "Thaycacac",
      font_size: 15,
      font_family: "Microsoft Sans Serif",
      is_finish: false,
      is_show_modal: false,
      selected_question: 1,
      mode: "learn",
      is_red: false,
      link_quiz: "",
      is_shuffle: false,
      is_confirm_result: false,
      is_show_result: false
    },
    actions: {
      SET_SHOW_MODAL({ commit }, data) {
        commit("addShowModal", data);
      },
      SET_MODE({ commit }, data) {
        commit("addMode", data);
      },
      SET_STUDENT({ commit }, data) {
        commit("addStudent", data);
      },
      SET_MODE({ commit }, data) {
        commit("addMode", data);
      },
      SET_RED({ commit }, data) {
        commit("addRed", data);
      },
      SET_SHUFFLE({ commit }, data) {
        commit("addShuffle", data);
      },
      SET_LINK_QUIZ({ commit }, data) {
        commit("addLinkQuiz", data);
      },
      SET_SHOW_RESULT({ commit }, data) {
        commit("addShowResult", data);
      },
      SET_CONFIRM_RESULT({ commit }, data) {
        commit("addConfirmResult", data);
      }
    },
    mutations: {
      addSets(state, data) {
        state.sets = data;
      },
      addServer(state, data) {
        state.server = data;
      },
      addTotal(state, data) {
        state.total = data;
      },
      addExamCode(state, data) {
        state.exam_code = data;
      },
      addStudent(state, data) {
        state.student = data;
      },
      addFontSize(state, data) {
        state.font_size = data;
      },
      addFontFamily(state, data) {
        state.font_family = data;
      },
      addFinish(state, data) {
        state.is_finish = data;
      },
      addShowModal(state, data) {
        state.is_show_modal = data;
      },
      addSelectedQuestion(state, data) {
        state.selected_question = data;
      },
      addMode(state, data) {
        state.mode = data;
      },
      addRed(state, data) {
        state.is_red = data;
      },
      addShuffle(state, data) {
        state.is_shuffle = data;
      },
      addLinkQuiz(state, data) {
        state.link_quiz = data;
      },
      addShowResult(state, data) {
        state.is_show_result = data;
      },
      addConfirmResult(state, data) {
        state.is_confirm_result = data;
      }
    },
    getters: {
      sets(state) {
        return state.sets;
      },
      server(state) {
        return state.server;
      },
      total(state) {
        return state.total;
      },
      exam_code(state) {
        return state.exam_code;
      },
      student(state) {
        return state.student;
      },
      font_size(state) {
        return state.font_size;
      },
      font_family(state) {
        return state.font_family;
      },
      is_finish(state) {
        return state.is_finish;
      },
      is_show_modal(state) {
        return state.is_show_modal;
      },
      selected_question(state) {
        return state.selected_question;
      },
      mode(state) {
        return state.mode;
      },
      is_red(state) {
        return state.is_red;
      },
      is_shuffle(state) {
        return state.is_shuffle;
      },
      link_quiz(state) {
        return state.link_quiz;
      },
      is_show_result(state) {
        return state.is_show_result;
      },
      is_confirm_result(state) {
        return state.is_confirm_result;
      }
    }
  });

export default store;
