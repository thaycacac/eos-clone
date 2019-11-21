<template>
  <button class="f-button">
    <span class="f-text">Finish</span>
  </button>
</template>

<style lang="scss">
.f-button {
  border-radius: 0;
  background: #ffffbd;
  padding: 0;
  border: #f0f0f0 2px solid;
  outline: none;
  &:active {
    border: red 2px solid;
  }
  .f-text {
    color: #959603;
    font-weight: bold;
    padding-left: 15px;
    padding-right: 15px;
    border: #cccccc 3px solid;
  }
}
</style>