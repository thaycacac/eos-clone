<template>
  <div class="f-wrap-content d-flex">
    <div class="f-left">
      <p class="f-answer mt-4">Answer</p>
      <f-answer label="A" />
      <f-answer label="B" />
      <f-answer label="C" />
      <f-answer label="D" />
    </div>
    <div class="f-right">
      <p class="f-title">Multiple choices 49/50</p>
      <div class="f-content">
        <p>(Choose 1 answer)</p>
        <span class="f-term" v-html="text" />
      </div>
    </div>
  </div>
</template>

<script>
import FAnswer from "./answer";
export default {
  components: {
    FAnswer
  },
  data() {
    return {
      text:
        "In the IEEE Std 1362 Concept of Operations (ConOps) Document, which of the following is fundamentally not included in the document?\n\nA. Current system or situation \nB. Proposed design method of system \nC. Justification for the nature of the change \nD. Operational scenarios"
    };
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
      .f-term {
        white-space: pre-line;
        line-height: 30px;
      }
    }
  }
}
</style>