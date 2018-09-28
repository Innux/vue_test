<template>
  <div>
    <mt-header title="title">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- <div class="swipe-wrap">
      <mt-swipe :auto="0">
        <mt-swipe-item v-for="tStory in topStories" :key="tStory.id" >
          <img :src="tStory.image | getPic">
          <span>{{tStory.title}}</span>
        </mt-swipe-item>
      </mt-swipe>
    </div> -->

    <!-- <img class="head-img" v-for="(tStory, index) in topStories" :key="index" :src="tStory.image | getPic"/> -->
    <!-- <p v-for="(tStory, index) in topStories" :key="index">{{tStory.title}}</p> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data() {
    return {
      topStories: []
    }
  },
  created() {
    axios.get('api/news/latest').then((res) => {
      console.log('....', res)
      this.topStories = res.data.top_stories
      // console.log('==', this.topStories)
    })
  }
}
</script>
<style lang="scss" scoped>
.swipe-wrap {
  width: 100%;
  height: 220px;
}
// .head-img {
//   width: 100%;
//   height: 100px;
// }

</style>
