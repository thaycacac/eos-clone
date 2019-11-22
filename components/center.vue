<template>
  <div>
    <img class="f-flag" :src="require('@/assets/images/american.png')" alt="flag" />
    <span class="f-time">{{ time | minutes }}:{{ time | seconds }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  filters: {
    minutes: function(value) {
      return Math.floor(value / 60);
    },
    seconds: function(value) {
      return (value % 60).toString().padStart(2, "0");
    }
  },
  data() {
    return {
      time: 60 * 60
    };
  },
  mounted() {
    setInterval(() => {
      this.time = this.time - 1;
    }, 1000);
  },
  computed: {
    ...mapGetters(["total"])
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