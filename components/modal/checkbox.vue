<template>
  <div>
    <label class="f-container">
      Danger
      <input
        type="checkbox"
        :checked="settings.danger"
        @click="settings.danger = !settings.danger; $emit('handleDanger', settings.danger)"
      />
      <span class="f-checkmark"></span>
    </label>
    <label class="f-container">
      Learn
      <input
        type="checkbox"
        :checked="mode === 'learn'"
        value="learn"
        @click="$emit('handleMode', 'learn')"
      />
      <span class="f-checkmark"></span>
    </label>
    <label class="f-container">
      Test
      <input
        type="checkbox"
        :checked="mode === 'test'"
        value="test"
        @click="$emit('handleMode', 'test')"
      />
      <span class="f-checkmark"></span>
    </label>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    settings: {
      type: Object,
      required: true,
      default: function() {
        return {};
      }
    },
    mode: {
      type: String,
      required: true,
      default: ""
    }
  },
  computed: {
    ...mapGetters(["is_red"])
  }
};
</script>

<style lang="scss" scoped>
.f-container {
  position: relative;
  padding-left: 23px;
  margin-bottom: 0;
  margin-left: 10px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 15px;
  color: black;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .f-checkmark {
    position: absolute;
    top: 3px;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: white;
    border: black 1px solid;
    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  }
}

.f-container .f-checkmark:after {
  left: 4px;
  top: -1px;
  width: 6px;
  height: 12px;
  border: solid black;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.f-container:hover input ~ .f-checkmark {
  background-color: #ccc;
}

.f-container input:checked ~ .f-checkmark:after {
  display: block;
}
</style>
