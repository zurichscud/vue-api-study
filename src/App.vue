<script lang="ts" setup>
import MessageBox from '@/components/MessageBox'
console.log(MessageBox)

MessageBox.alert(
  {
    title: 'TITLE',
    btnText: 'OK',
    content: 'CONTENT',
  },
  () => {
    console.log('close by render')
  },
)
</script>

<template>
  <el-button type="primary">dddd</el-button>
</template>

<style scoped></style>
