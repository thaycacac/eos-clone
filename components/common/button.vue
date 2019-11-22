<template>
  <div>
    <input class="f-button" type="button" value="Show Question" />
    <button
      onclick="document.getElementById('id01').style.display='block'"
      class="w3-button w3-black"
    >Open Modal</button>
  </div>
</template>

<style lang="scss" scoped>
.f-button {
  padding: 0 10px;
  border: rgb(204, 204, 204) 3px solid;
  background: none;
  font-size: 13px;
}
</style>