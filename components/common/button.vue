<template>
  <input class="f-button" type="button" value="Show Options" @click="addShowModal(!is_show_modal)" />
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["is_show_modal"])
  },
  methods: mapMutations(["addShowModal"])
};
</script>

<style lang="scss" scoped>
.f-button {
  padding: 0 10px;
  border: rgb(204, 204, 204) 3px solid;
  background: none;
  font-size: 13px;
}
</style>