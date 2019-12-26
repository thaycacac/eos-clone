<template>
  <div
    class="f-wrap-modal"
    id="f-result"
    :style="!is_show_result ? 'display: none': 'display: block'"
  >
    <div class="f-top d-flex justify-content-between" id="f-result-header">
      <div>
        <img :src="require('@/assets/images/logo.JPG')" alt="logo" />
        <span class="f-title">Result</span>
      </div>
      <f-close />
    </div>
    <div class="f-footer">
      <span class="f-text-footer">Your score: {{ correct }} / {{ sets.length }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { dragElement } from "@/utils/dragElement";
import FClose from "../modal/close";
export default {
  components: {
    FClose
  },
  computed: {
    ...mapGetters(["is_show_result", "sets"]),
    correct() {
      let count = 0;
      for (let set of this.sets) {
        console.log(set);
        if (JSON.stringify(set.answers) == JSON.stringify(set.choose)) {
          count += 1;
        }
      }
      return count;
    }
  },
  mounted() {
    dragElement(document.getElementById("f-result"));
  },
  methods: mapMutations(["addShowResult"])
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
  .f-footer {
    text-align: center;
    margin-top: 110px;
    .f-text-footer {
      color: red;
      font-size: 15px;
    }
  }
}
</style>
