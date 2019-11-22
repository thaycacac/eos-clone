<template>
  <b-container fluid class="f-wrapall d-flex justify-content-between flex-column">
    <b-row class="f-header" no-gutters>
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
    <div class="mb-2 f-body">
      <f-tabs />
      <f-content class="f-box" />
    </div>
    <div class="f-footer">
      <f-question
        v-for="n in set.terms.length"
        :key="n"
        :number="n"
        :completed="n%2===0 ? true : false"
      />
      <br />
      <f-checkbox />
      <br />
      <f-button />
    </div>
  </b-container>
</template>

<script>
import data from "./data";
import FCheckbox from "@/components/finish/checkbox";
import FButton from "@/components/finish/button";
import FInformation from "@/components/information";
import FCenter from "@/components/center";
import FTabs from "@/components/common/tabs";
import FContent from "@/components/content";
import FQuestion from "@/components/common/question";
export default {
  components: {
    FCheckbox,
    FButton,
    FInformation,
    FCenter,
    FTabs,
    FContent,
    FQuestion
  },
  asyncData({ store }) {
    store.commit("addSet", data);
    return {
      set: data
    };
  }
};
</script>

<style lang="scss">
.f-wrapall {
  background: red;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 100vh;
  .f-body {
    height: 100%;
    .f-box {
      height: calc(100vh - 321px);
    }
  }
}
</style>
