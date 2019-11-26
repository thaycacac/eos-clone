<template>
  <input
    type="text"
    class="f-input"
    :disabled="disabled"
    :value="value"
    :placeholder="placeholder"
    :style="disabled ? 'color: #949494; border-color: #949494' : ''"
    @input="handleChange($event.target.value)"
  />
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    of: {
      type: String
    }
  },
  methods: {
    handleChange(value) {
      if (this.of === "username") {
        this.$emit("handleUsername", value);
      } else {
        this.$emit("handleLinkQuiz", value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.f-input {
  border: gray 1px solid;
  height: 22px;
  margin-left: 3px;
  width: 100%;
  font-size: 13px;
}
</style>