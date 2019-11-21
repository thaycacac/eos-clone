<template>
  <input class="f-number" type="number" :value="value" :disabled="!disabled" />
</template>

<script>
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
  }
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