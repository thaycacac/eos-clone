<template>
  <button class="f-button" @click="addShowModal(false)">X</button>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: mapMutations(["addShowModal"])
};
</script>

<style lang="scss" scoped>
.f-button {
  border: none;
  height: 30px;
  width: 30px;
  background: none;
  &:hover {
    color: white;
    background: red;
  }
}
</style>