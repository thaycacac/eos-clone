<template>
  <div class="f-checkbox">
    <input type="checkbox" name="finish" :checked="is_show_result" @change="addConfirmResult(true)" /> I want to finish to exam
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["is_show_result"])
  },
  methods: {
    ...mapMutations(["addConfirmResult"])
  }
};
</script>

<style lang="scss">
.f-checkbox {
  display: inline-block;
}
</style>
