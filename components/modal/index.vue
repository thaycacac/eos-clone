<template>
  <div
    class="f-wrap-modal"
    id="f-modal"
    :style="!is_show_modal ? 'display: none': 'display: block'"
  >
    <div class="f-top d-flex justify-content-between" id="f-modal-header">
      <div>
        <img :src="require('@/assets/images/logo.JPG')" alt="logo" />
        <span class="f-title">EOS Login Form</span>
      </div>
      <f-close />
    </div>
    <div class="f-body">
      <div class="f-date text-right">22.11.2019</div>
      <table class="f-table">
        <tr class="f-row">
          <td class="f-label">Exam Code:</td>
          <td>
            <f-input
              placeholder="Paste link quizlet"
              @handleUsername="handleUsername"
              @handleLinkQuiz="handleLinkQuiz"
              :value="link_quiz"
              of="link_quiz"
            />
          </td>
        </tr>
        <tr class="f-row">
          <td class="f-label">User Name:</td>
          <td>
            <f-input
              @handleUsername="handleUsername"
              @handleLinkQuiz="handleLinkQuiz"
              :value="username"
              of="username"
            />
          </td>
        </tr>
        <tr class="f-row">
          <td class="f-label">Settings:</td>
          <td>
            <f-checkbox
              :settings="settings"
              :mode="settings.mode"
              @handleDanger="handleDanger"
              @handleMode="handleMode"
              @handleShuffle="handleShuffle"
            />
          </td>
        </tr>
        <tr class="f-row">
          <td class="f-label">Domain:</td>
          <td>
            <f-input :disabled="true" value="FE.EDU.VN" />
          </td>
        </tr>
        <tr class="f-row-button">
          <td></td>
          <td>
            <f-button value="Apply" class="mr-5" @handleApply="handleApply" />
            <f-button value="Exit" :focus="false" />
          </td>
        </tr>
        <tr class="f-row-text">
          <td></td>
          <td>
            <span class="f-text mr-4">Check sound (7secs)</span>
            <span class="f-text">Check font</span>
          </td>
        </tr>
      </table>
    </div>
    <div class="f-footer">
      <span class="f-text-footer">Register the exam may take time, please wait!</span>
    </div>
  </div>
</template>

<script>
import { getIdQuizlet } from "@/utils/quizlet";
import { getSets } from "@/utils/sets";
import { dragElement } from "@/utils/dragElement";
import { mapGetters, mapMutations } from "vuex";
import FClose from "./close";
import FInput from "./input";
import FButton from "./button";
import FCheckbox from "./checkbox";
import axios from "axios";
export default {
  components: {
    FClose,
    FInput,
    FButton,
    FCheckbox
  },
  data() {
    return {
      link_quiz: "",
      username: "thaycacac",
      settings: {
        danger: true,
        mode: "learn",
        shuffle: false
      }
    };
  },
  computed: {
    ...mapGetters(["is_show_modal"])
  },
  mounted() {
    dragElement(document.getElementById("f-modal"));
  },
  methods: mapMutations(["addShowModal"]),
  methods: {
    handleDanger(data) {
      this.settings.danger = data;
    },
    handleMode(data) {
      this.settings.mode = data;
    },
    handleShuffle(data) {
      this.settings.shuffle = data;
    },
    handleUsername(data) {
      this.username = data;
    },
    handleLinkQuiz(data) {
      console.log(data);
      this.link_quiz = data;
    },
    async handleApply() {
      this.$store.dispatch("SET_STUDENT", this.username);
      this.$store.dispatch("SET_MODE", this.settings.mode);
      this.$store.dispatch("SET_MODE", this.settings.mode);
      this.$store.dispatch("SET_RED", this.settings.danger);
      this.$store.dispatch("SET_SHUFFLE", this.settings.shuffle);
      this.$store.dispatch("SET_LINK_QUIZ", this.link_quiz);
      this.$store.dispatch("SET_SHOW_MODAL", false);
      if (this.link_quiz && getIdQuizlet(this.link_quiz)) {
        window.location.href = `/quizlet?id=${getIdQuizlet(this.link_quiz)}`;
      } else if (this.link_quiz === "") {
        return;
      } else {
        alert("Not bank");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.f-wrap-modal {
  left: calc(50% - 212px);
  top: calc(40% - 162px);
  width: 424px;
  height: 324px;
  position: absolute;
  border: #909090 1px solid;
  background: #f0f0f0;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.06);
  color: black;
  .f-top {
    background: white;
    height: 30px;
    cursor: move;
    .f-title {
      font-size: 13px;
      line-height: 30px;
    }
  }
  .f-body {
    padding: 7px 35px 0px 15px;
    .f-date {
      font-size: 13px;
    }
    .f-table {
      width: 100%;
      .f-row-text {
        height: 31px;
        .f-text {
          color: blue;
          font-size: 12px;
          text-decoration: underline;
          cursor: pointer;
        }
      }
      .f-row-button {
        height: 31px;
      }
      .f-row {
        height: 43px;
        .f-label {
          font-size: 14px;
          width: 84px;
          text-align: right;
        }
      }
    }
  }
  .f-footer {
    text-align: center;
    .f-text-footer {
      color: red;
      font-size: 15px;
    }
  }
}
</style>
