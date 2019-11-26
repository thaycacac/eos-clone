<template>
  <button
    class="f-button"
    :style="focus ? 'border: #0476e8 2px solid;' : 'border: #aeacaf 1px solid'"
    @click="handleClick"
  >{{ value }}</button>
</template>

<script>
export default {
  props: {
    focus: {
      type: Boolean,
      default: true
    },
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleClick() {
      if (!this.focus) {
        this.$store.dispatch("SET_SHOW_MODAL", false);
      } else {
        this.$emit("handleApply");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.f-button {
  border-radius: 0;
  font-size: 14.3px;
  height: 23px;
  width: 85px;
  background: #e2e1dc;
}
</style>