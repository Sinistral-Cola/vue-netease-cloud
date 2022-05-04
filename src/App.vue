<template>
<!--  使用组件-->
  <router-view/>
  <MusicControl></MusicControl>
</template>
<script>
//引入
  import MusicControl from "@/components/music-control/MusicControl";
export default {
    name: 'App',
    components: {MusicControl},
  }
</script>


<style lang="less">

</style>
