<template>
  <button
    class="f-button"
    @click="addSelectedQuestion(selected_question + 1)"
  >Next</button>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters(['selected_question'])
  },
  methods: mapMutations(['addSelectedQuestion'])
};
</script>

<style lang="scss" scoped>
.f-button {
  border: #aeacaf 1px solid;
  border-radius: 0;
  font-size: 14.3px;
  height: 23px;
  width: 64px;
  background: #e2e1dc;
}
</style>
