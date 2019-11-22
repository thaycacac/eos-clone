<template>
  <div>
    <img class="f-flag" :src="require('@/assets/images/american.png')" alt="flag" />
    <span class="f-time">42:00</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["set"])
  }
};
</script>

<style lang="scss" scoped>
.f-flag {
  width: 180px;
}
.f-time {
  font-size: 50px;
  font-weight: bold;
  margin-left: 15px;
}
</style>