<template>
  <div class="f-wrap-modal" id="f-modal">
    <div class="f-top d-flex justify-content-between">
      <div>
        <img :src="require('@/assets/images/logo.JPG')" alt="logo" />
        <span class="f-title">EOS Login Form</span>
      </div>
      <f-button />
    </div>
    <div class="f-body">
      <div class="f-date text-right">22.11.2019</div>
      <table>
        <tr>
          <td>Jill</td>
          <td>
            <f-input />
          </td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>
            <f-input />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import FButton from "./button";
import FInput from "./input";
export default {
  components: {
    FButton,
    FInput
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
      if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(
          elmnt.id + "header"
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
    .f-title {
      font-size: 13px;
      line-height: 30px;
    }
  }
  .f-body {
    padding: 7px 20px;
    .f-date {
      font-size: 13px;
    }
  }
}
</style>