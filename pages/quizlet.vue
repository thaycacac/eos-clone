<template>
  <div>
    <b-container
      fluid
      class="f-wrapall d-flex justify-content-between flex-column hidden-mobile"
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
        <template v-if="sets.length <= 50">
          <f-question
            v-for="n in sets.length"
            :key="n"
            :number="n"
            :completed="sets[n - 1].choose.length !== 0 ? true : false"
          />
        </template>
        <template v-else>
          <f-question
            v-for="n in sets.length"
            v-show="isShowQuestion(n)"
            :key="n"
            :number="n"
            :completed="sets[n - 1].choose.length !== 0 ? true : false"
          />
        </template>
        <br />
        <f-checkbox />
        <br />
        <f-button />
      </div>
      <f-modal />
    </b-container>
    <b-container
      fluid
      class="f-wrapall d-flex justify-content-between flex-column show-mobile"
      :style="is_red ? 'background: red' : 'background: #f0f0f0'"
    >
      <p>Thaycacac</p>
    </b-container>
  </div>
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
      `https://eos-backend.thaycacac.now.sh/?id=${query.id}`
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
    ...mapGetters(["is_red", "selected_question"])
  },
  methods: mapMutations(["addRed"]),
  methods: {
    isShowQuestion(n) {
      if (this.selected_question < 25) {
        return n <= 50;
      } else if (this.selected_question >= this.sets.length - 25) {
        return n >= this.sets.length - 50;
      }
      return (
        n > this.selected_question - 25 && n <= this.selected_question + 25
      );
    }
  },
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
.hidden-mobile {
  @media (max-width: 768px) {
    display: none !important;
  }
}
.show-mobile {
  @media (min-width: 768px) {
    display: none !important;
  }
}
</style>
