<template>
  <input
    class="f-button"
    type="button"
    :value="number"
    :class="[completed === true ? 'f-completed': '', selected_question === number ? 'f-focus' : '']"
    @click="addSelectedQuestion(number)"
  />
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  props: {
    number: {
      type: Number,
      default: 1
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(["selected_question"])
  },
  methods: mapMutations(['addSelectedQuestion'])
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
  &:focus {
    outline: none;
  }
}
.f-focus {
  padding: 1px 10px;
  border: rgb(122, 122, 122) 2px solid;
}
.f-completed {
  background: #abff00;
}
</style>
