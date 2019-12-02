<template>
  <b-container
    fluid
    class="f-wrapall d-flex justify-content-between flex-column"
    :style="is_red ? 'background: red' : 'background: #f0f0f0'"
  >
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
    <div class="mb-2 f-body-main">
      <f-tabs />
      <f-content class="f-box" />
    </div>
    <div class="f-footer">
      <f-question
        v-for="n in sets.length"
        :key="n"
        :number="n"
        :completed="sets[n - 1].choose.length !== 0 ? true : false"
      />
      <br />
      <f-checkbox />
      <br />
      <f-button />
    </div>
    <f-modal />
  </b-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { getSets } from "@/utils/sets";
import FCheckbox from "@/components/finish/checkbox";
import FButton from "@/components/finish/button";
import FInformation from "@/components/information";
import FCenter from "@/components/center";
import FTabs from "@/components/common/tabs";
import FContent from "@/components/content";
import FQuestion from "@/components/common/question";
import FModal from "@/components/modal";
import axios from "axios";
export default {
  components: {
    FCheckbox,
    FButton,
    FInformation,
    FCenter,
    FTabs,
    FContent,
    FQuestion,
    FModal
  },
  async asyncData({ store, query }) {
    const result = await axios.get(
      `https://api.quizlet.com/2.0/sets/${query.id}?client_id=ke9tZw8YM6`
    );
    const {
      data: { terms, id, title }
    } = result;

    const sets = getSets(terms);

    store.commit("addServer", id);
    store.commit("addTotal", terms.length);
    store.commit("addExamCode", title);
    store.commit("addSets", terms);
    return {
      sets: sets
    };
  },
  computed: {
    ...mapGetters(["is_red"])
  },
  methods: mapMutations(["addRed"]),
  mounted() {
    const f = setTimeout(() => {
      this.addRed(true);
    }, 2000);
  }
};
</script>

<style lang="scss">
.f-wrapall {
  padding-top: 5px;
  padding-bottom: 5px;
  height: 100vh;
  .f-body-main {
    height: 100%;
    .f-box {
      height: calc(100vh - 321px);
    }
  }
}
</style>
