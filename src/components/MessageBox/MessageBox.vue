<template>
  <div class="message-box">
    <div class="inner">
      <div class="title">
        <h1>{{ title }}</h1>
      </div>
      <div class="content">
        <p>{{ content }}</p>
      </div>
      <div class="footer">
        <el-button type="primary" @click="close">{{ btnText }}</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{
  title: string
  content: string
  btnText: string
  close: () => void
}>()
</script>

<style scoped lang="scss">
.message-box {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  .inner {
    width: 400px;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;

    .title {
      height: 38px;
      line-height: 38px;
      background-color: skyblue;
      h1 {
        font-size: 16px;
      }
    }
    .content {
      min-height: 100px;
      background-color: yellowgreen;
    }
  }
}
</style>
