<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  created() {
    axios.get('api/news/latest').then((res) => {
      console.log('....', res)
    })
  }
}
</script>
