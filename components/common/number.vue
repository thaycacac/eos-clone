<template>
  <input
    class="f-number"
    type="number"
    v-model="number"
    :disabled="!disabled"
    @change="addFontSize(number)"
  />
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      number: this.value
    };
  },
  methods: mapMutations(["addFontSize"])
};
</script>

<style lang="scss" scoped>
.f-number {
  padding: 0;
  width: 50px;
  margin-top: 2px;
  font-size: 14px;
}
</style>