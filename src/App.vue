<script lang="ts" setup>
import MessageBox from '@/components/MessageBox'

MessageBox.alert({
  title: 'TITLE',
  btnText: 'OK',
  content: 'CONTENT',
}, () => {
  console.log('close')
})
</script>

<template>

</template>

<style scoped>

</style>
