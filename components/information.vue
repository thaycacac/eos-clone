<template>
  <div class="f-wrap-info">
    <div>
      <span class="f-label f-machine">Machine:</span>
      <span class="f-value">THAYCACAC_SERVER</span>
      <span class="f-label f-student">Student:</span>
      <span class="f-value">{{ student }}</span>
    </div>
    <div>
      <span class="f-label f-server">Server:</span>
      <span class="f-value">Eng_EOS_{{ server }}</span>
      <span class="f-label f-exam-code">Exam Code:</span>
      <span class="f-value">{{ exam_code }}</span>
    </div>
    <div>
      <span class="f-label f-duration">Duration:</span>
      <span class="f-value">{{ Math.round(total * 1.2) }} minutes</span>
      <span class="f-label f-open-code">Open Code:</span>
      <span class="f-value">
        <f-input />
        <f-button />
      </span>
    </div>
    <div>
      <span class="f-label f-q-mark">Q mark:</span>
      <span class="f-value">1</span>
      <span class="f-label f-total-marks">Total Marks:</span>
      <span class="f-value">{{ total }}</span>
      <span class="f-label f-vol">Vol:</span>
      <span class="f-value">
        <f-number value="8" />
      </span>
    </div>
    <div>
      <span class="f-label f-font">Font:</span>
      <span class="f-value">
        <f-select />
      </span>
      <span class="f-label f-size">Size:</span>
      <span class="f-value">
        <f-number value="15" disabled="false" />
      </span>
      <span class="f-label f-time-left mr-3">Time Left:</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FInput from "@/components/common/input";
import FButton from "@/components/common/button";
import FNumber from "@/components/common/number";
import FSelect from "@/components/common/select";
export default {
  components: {
    FInput,
    FButton,
    FNumber,
    FSelect
  },
  computed: {
    ...mapGetters(["server", "total", "exam_code", "student"])
  }
};
</script>

<style lang="scss">
.f-wrap-info {
  clear: right;
  .f-label {
    color: black;
  }
  .f-value {
    font-weight: bold;
  }
  .f-machine {
    margin-left: 2px;
  }
  .f-server {
    margin-left: 14px;
  }
  .f-q-mark {
    margin-left: 8px;
  }
  .f-open-code {
    margin-left: 40px;
  }
  .f-total-marks {
    margin-left: 115px;
  }
  .f-vol {
    margin-left: 45px;
  }
  .f-font {
    margin-left: 161px;
  }
  .f-time-left {
    float: right;
  }
}
</style>