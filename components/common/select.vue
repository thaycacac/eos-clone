<template>
  <select class="f-select" v-model="font_current" @change="addFontFamily(font_current)">
    <option value="Microsoft Sans Serif" selected>Microsoft Sans Serif</option>
    <option value="Arial">Arial</option>
    <option value="Times new roman">Times new roman</option>
  </select>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      font_current: "Microsoft Sans Serif"
    };
  },
  methods: mapMutations(["addFontFamily"])
};
</script>

<style lang="scss" scoped>
.f-select {
  font-size: 13px;
  padding: 2px 0;
  width: 145px;
}
</style>