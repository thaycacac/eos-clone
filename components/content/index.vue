<template>
  <div class="f-wrap-content d-flex">
    <div class="f-left">
      <p class="f-answer mt-4">Answer</p>
      <f-answer
        v-for="n in sets[selected - 1].number_question"
        :key="n"
        :label="answers[n - 1]"
        :selected="selected"
        @handleChoose="handleChoose"
      />
    </div>
    <div class="f-right">
      <p class="f-title">Multiple choices {{ selected }}/50</p>
      <div class="f-content" :style="`font-size: ${font_size}px; font-family: ${font_family}`">
        <p>(Choose 1 answer)</p>
        <span class="f-term" v-html="sets[selected - 1].question" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FAnswer from "./answer";
export default {
  props: {
    selected: {
      type: Number,
      default: 1
    }
  },
  components: {
    FAnswer
  },
  data() {
    return {
      answers: ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    };
  },
  computed: {
    ...mapGetters(["sets", "font_size", "font_family"])
  },
  methods: {
    handleChoose(answer) {
      if (!this.sets[this.selected - 1].choose.includes(answer)) {
        this.sets[this.selected - 1].choose.push(answer);
      } else {
        const index = this.sets[this.selected - 1].choose.indexOf(answer);
        this.sets[this.selected - 1].choose.splice(index, 1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.f-wrap-content {
  background: #f0f0f0;
  padding: 20px;
  .f-left {
    width: 90px;
  }
  .f-title,
  .f-answer {
    color: blue;
    font-weight: bold;
  }
  .f-title {
    margin-bottom: 4px;
  }
  .f-right {
    width: 100%;
    .f-content {
      border-top: #707070 1px solid;
      border-left: #707070 1px solid;
      border-right: #e7e7e7 1px solid;
      border-bottom: #e7e7e7 1px solid;
      background: white;
      padding: 5px;
      color: black;
      height: calc(100% - 20px);
      .f-term {
        white-space: pre-line;
        line-height: 30px;
      }
    }
  }
}
</style>