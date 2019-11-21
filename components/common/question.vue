<template>
  <input
    class="f-button"
    type="button"
    :value="number"
    :class="completed === true ? 'f-completed': ''"
  />
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: "1"
    },
    completed: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.f-button {
  margin-top: 7px;
  margin-right: 3px;
  padding: 0 9px;
  border: rgb(204, 204, 204) 3px solid;
  background: none;
  font-size: 13px;
}
.f-completed {
  background: #abff00;
}
</style>