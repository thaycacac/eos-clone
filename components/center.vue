<template>
  <div>
    <img class="f-flag" :src="require('@/assets/images/american.png')" alt="flag" />
    <span class="f-time">42:44</span>
  </div>
</template>

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