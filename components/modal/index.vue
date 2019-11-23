<template>
  <div class="f-wrap-modal" id="f-modal">
    <div class="f-top d-flex justify-content-between" id="f-modal-header">
      <div>
        <img :src="require('@/assets/images/logo.JPG')" alt="logo" />
        <span class="f-title">EOS Login Form</span>
      </div>
      <f-close />
    </div>
    <div class="f-body">
      <div class="f-date text-right">22.11.2019</div>
      <table class="f-table">
        <tr class="f-row">
          <td class="f-label">Exam Code:</td>
          <td>
            <f-input />
          </td>
        </tr>
        <tr class="f-row">
          <td class="f-label">User Name:</td>
          <td>
            <f-input />
          </td>
        </tr>
        <tr class="f-row">
          <td class="f-label">Password:</td>
          <td>
            <f-input />
          </td>
        </tr>
        <tr class="f-row">
          <td class="f-label">Domain:</td>
          <td>
            <f-input :disabled="true" value="FE.EDU.VN" />
          </td>
        </tr>
        <tr class="f-row-button">
          <td></td>
          <td>
            <f-button value="Loggin" class="mr-5" />
            <f-button value="Exit" :focus="false" />
          </td>
        </tr>
        <tr class="f-row-text">
          <td></td>
          <td>
            <span class="f-text mr-4">Check sound (7secs)</span>
            <span class="f-text">Check font</span>
          </td>
        </tr>
      </table>
    </div>
    <div class="f-footer">
      <span class="f-text-footer">Register the exam may take time, please wait!</span>
    </div>
  </div>
</template>

<script>
import FClose from "./close";
import FInput from "./input";
import FButton from "./button";
export default {
  components: {
    FClose,
    FInput,
    FButton
  },
  mounted() {
    this.dragElement(document.getElementById("f-modal"));
  },
  methods: {
    dragElement(elmnt) {
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      if (document.getElementById(elmnt.id + "-header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(
          elmnt.id + "-header"
        ).onmousedown = dragMouseDown;
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
      }

      function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.f-wrap-modal {
  left: calc(50% - 212px);
  top: calc(40% - 162px);
  width: 424px;
  height: 324px;
  position: absolute;
  border: #909090 1px solid;
  background: #f0f0f0;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.06);
  color: black;
  .f-top {
    background: white;
    height: 30px;
    cursor: move;
    .f-title {
      font-size: 13px;
      line-height: 30px;
    }
  }
  .f-body {
    padding: 7px 35px 0px 15px;
    .f-date {
      font-size: 13px;
    }
    .f-table {
      width: 100%;
      .f-row-text {
        height: 31px;
        .f-text {
          color: blue;
          font-size: 12px;
          text-decoration: underline;
          cursor: pointer;
        }
      }
      .f-row-button {
        height: 31px;
      }
      .f-row {
        height: 43px;
        .f-label {
          font-size: 14px;
          width: 84px;
          text-align: right;
        }
      }
    }
  }
  .f-footer {
    text-align: center;
    .f-text-footer {
      color: red;
      font-size: 15px;
    }
  }
}
</style>