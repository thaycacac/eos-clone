<template>
  <button
    class="f-button"
    :style="focus ? 'border: #0476e8 2px solid;' : 'border: #aeacaf 1px solid'"
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