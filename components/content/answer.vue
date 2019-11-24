<template>
  <label class="f-container">
    {{ label }}
    <input type="checkbox" :checked="check" :value="label" @click="handleChoose" />
    <span class="f-checkmark"></span>
  </label>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    label: {
      type: String,
      default: "A"
    },
  },
  computed: {
    ...mapGetters(["sets", "selected_question"]),
    check: function() {
      return this.sets[this.selected_question - 1].choose.includes(this.label);
    }
  },
  methods: {
    handleChoose() {
      this.$emit("handleChoose", this.label);
    }
  }
};
</script>

<style lang="scss" scoped>
.f-container {
  display: block;
  position: relative;
  padding-left: 23px;
  margin-bottom: 12px;
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
