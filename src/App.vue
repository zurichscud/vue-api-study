<script setup lang="ts">
import MessageBox from '@/components/MessageBox'

MessageBox.alert({
  title: 'TITLE',
  btnText: 'OK',
  content: 'CONTENT',
  close: () => {
    console.log('close')
  }
})
</script>

<template>

</template>

<style scoped>

</style>
