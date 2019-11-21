<template>
  <b-container fluid class="f-wrapall">
    <b-row class="f-row" no-gutters>
      <b-col cols="5">
        <div class="float-right">
          <f-checkbox />
          <f-button />
        </div>
        <f-information />
      </b-col>
      <b-col cols="2">
        <img class="f-flag" :src="require('@/assets/images/american.png')" alt="flag" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import data from "./data";
import FCheckbox from "@/components/finish/checkbox";
import FButton from "@/components/finish/button";
import FInformation from "@/components/information";
export default {
  components: {
    FCheckbox,
    FButton,
    FInformation
  },
  data() {
    return {
      data
    };
  }
};
</script>

<style lang="scss">
.f-flag {
  width: 200px;
}
</style>
