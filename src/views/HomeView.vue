<template>
   <HeaderCom/>
    <SwiperCom></SwiperCom>
    <IconList></IconList>
    <MusicList></MusicList>
</template>

<script>
// @ is an alias to /src

import SwiperCom from "@/components/swiper/SwiperCom";
import IconList from "@/components/icon-list/IconList";
import MusicList from "@/components/music-list/MusicList";
import HeaderCom from "@/components/header/HeaderCom";
export default {
  name: 'HomeView',
  components: {
      HeaderCom,
      IconList,
      SwiperCom,
      MusicList
  }
}
</script>
