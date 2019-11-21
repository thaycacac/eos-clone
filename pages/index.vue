<template>
  <b-container fluid class="f-wrapall">
    <b-row class="f-row" no-gutters>
      <b-col cols="5">
        <div class="float-right mr-3">
          <f-checkbox />
          <f-button />
        </div>
        <f-information />
      </b-col>
      <b-col cols="2">
        <f-center />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import data from "./data";
import FCheckbox from "@/components/finish/checkbox";
import FButton from "@/components/finish/button";
import FInformation from "@/components/information";
import FCenter from "@/components/center";
export default {
  components: {
    FCheckbox,
    FButton,
    FInformation,
    FCenter
  },
  data() {
    return {
      data
    };
  }
};
</script>

<style lang="scss">
.f-wrapall {
  background: red;
}
</style>
