<template>
    <div class="footer">
        <img :src="playlist[playId].al.picUrl"
             alt=""
             width="50" height="50"
             style="float: left" @click="showLyric">
        <h4 style="float:left;">{{playlist[playId].name}}</h4>
        <audio ref="audio"
               :src="`https://music.163.com/song/media/outer/url?id=${playlist[playId].id}.mp3`"></audio>
        <button @click="prevMusic">&lt;&lt;</button>
        <button @click="play">
            <!--暂停-->
            <svg v-if="paused"
                 t="1651469885380" class="icon" viewBox="0 0 1024 1024" version="1.1"

                 xmlns="http://www.w3.org/2000/svg" p-id="3015" width="20" height="20">
                <path d="M512 512m-508.928 0a508.928 508.928 0 1 0 1017.856 0 508.928 508.928 0 1 0-1017.856 0Z"
                      fill="#3C3C3C" p-id="3016"></path>
                <path d="M362.788571 292.571429h42.422858v438.857142h-42.422858zM618.788571 292.571429h42.422858v438.857142h-42.422858z"
                      fill="#FFFFFF" p-id="3017"></path>
            </svg>

            <!--播放-->
            <svg v-else
                 t="1651469866387" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="2859" width="20" height="20">
                <path d="M423.77 731.22c-12.74 0-25.47-3.35-37.08-10.05-23.22-13.4-37.08-37.41-37.08-64.22V357.16c0-26.81 13.86-50.81 37.08-64.22 23.22-13.4 50.94-13.4 74.15 0l259.62 149.89c23.22 13.4 37.08 37.41 37.08 64.22 0 26.81-13.86 50.81-37.08 64.22l-259.62 149.9c-11.6 6.7-24.34 10.05-37.07 10.05z m0.08-390.27c-3.73 0-6.68 1.37-8.16 2.22-2.43 1.4-8.08 5.57-8.08 13.99v299.79c0 8.42 5.65 12.59 8.08 13.99 2.43 1.4 8.86 4.21 16.15 0l259.62-149.89c7.29-4.21 8.08-11.18 8.08-13.99s-0.79-9.78-8.08-13.99l-259.62-149.9c-2.86-1.65-5.59-2.22-7.99-2.22z"
                      p-id="2860"></path>
                <path d="M514.29 989.78c-65.15 0-128.38-12.77-187.91-37.95-57.49-24.31-109.11-59.12-153.43-103.44-44.32-44.32-79.13-95.94-103.44-153.43-25.18-59.53-37.95-122.75-37.95-187.91s12.77-128.38 37.95-187.91c24.31-57.49 59.12-109.11 103.44-153.43 44.32-44.32 95.94-79.13 153.43-103.44 59.53-25.18 122.75-37.95 187.91-37.95s128.37 12.78 187.9 37.96c57.49 24.31 109.11 59.12 153.43 103.44 44.32 44.32 79.13 95.94 103.44 153.43 25.18 59.53 37.95 122.75 37.95 187.91s-12.77 128.38-37.95 187.91c-24.31 57.49-59.12 109.11-103.44 153.43-44.32 44.32-95.94 79.13-153.43 103.44-59.53 25.17-122.75 37.94-187.9 37.94z m0-907.45c-234.19 0-424.72 190.53-424.72 424.72 0 234.19 190.53 424.72 424.72 424.72 234.19 0 424.72-190.53 424.72-424.72 0-234.19-190.53-424.72-424.72-424.72z"
                      p-id="2861"></path>
            </svg>
        </button>
        <button @click="nextMusic">>></button>
        <div class="playMusic" v-show="playMusic">
            <button @click="displayLyric">&lt;</button>
            歌词界面
            <div ref="paoMaDeng" style="position: absolute;left: 30px;top: 10px">
                {{playlist[playId].name}}
            </div>
            <!--        这里应该有旋转的图片  -->
            <img :src="img" alt="" width="200" v-show="!isLyric">
            <div class="showLyric" v-show="isLyric">
                <!--                歌词展示界面-->
               <ul>
                   <li v-for="item in $store.getters.lyricList">
                       {{item}}
                   </li>
               </ul>

            </div>
            <div class="lyricControl">
                <button @click="prevMusic">&lt;&lt;</button>
                <button @click="play">
                    <!--暂停-->
                    <svg v-if="paused"
                         t="1651469885380" class="icon" viewBox="0 0 1024 1024" version="1.1"

                         xmlns="http://www.w3.org/2000/svg" p-id="3015" width="20" height="20">
                        <path d="M512 512m-508.928 0a508.928 508.928 0 1 0 1017.856 0 508.928 508.928 0 1 0-1017.856 0Z"
                              fill="#3C3C3C" p-id="3016"></path>
                        <path d="M362.788571 292.571429h42.422858v438.857142h-42.422858zM618.788571 292.571429h42.422858v438.857142h-42.422858z"
                              fill="#FFFFFF" p-id="3017"></path>
                    </svg>

                    <!--播放-->
                    <svg v-else
                         t="1651469866387" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="2859" width="20" height="20">
                        <path d="M423.77 731.22c-12.74 0-25.47-3.35-37.08-10.05-23.22-13.4-37.08-37.41-37.08-64.22V357.16c0-26.81 13.86-50.81 37.08-64.22 23.22-13.4 50.94-13.4 74.15 0l259.62 149.89c23.22 13.4 37.08 37.41 37.08 64.22 0 26.81-13.86 50.81-37.08 64.22l-259.62 149.9c-11.6 6.7-24.34 10.05-37.07 10.05z m0.08-390.27c-3.73 0-6.68 1.37-8.16 2.22-2.43 1.4-8.08 5.57-8.08 13.99v299.79c0 8.42 5.65 12.59 8.08 13.99 2.43 1.4 8.86 4.21 16.15 0l259.62-149.89c7.29-4.21 8.08-11.18 8.08-13.99s-0.79-9.78-8.08-13.99l-259.62-149.9c-2.86-1.65-5.59-2.22-7.99-2.22z"
                              p-id="2860"></path>
                        <path d="M514.29 989.78c-65.15 0-128.38-12.77-187.91-37.95-57.49-24.31-109.11-59.12-153.43-103.44-44.32-44.32-79.13-95.94-103.44-153.43-25.18-59.53-37.95-122.75-37.95-187.91s12.77-128.38 37.95-187.91c24.31-57.49 59.12-109.11 103.44-153.43 44.32-44.32 95.94-79.13 153.43-103.44 59.53-25.18 122.75-37.95 187.91-37.95s128.37 12.78 187.9 37.96c57.49 24.31 109.11 59.12 153.43 103.44 44.32 44.32 79.13 95.94 103.44 153.43 25.18 59.53 37.95 122.75 37.95 187.91s-12.77 128.38-37.95 187.91c-24.31 57.49-59.12 109.11-103.44 153.43-44.32 44.32-95.94 79.13-153.43 103.44-59.53 25.17-122.75 37.94-187.9 37.94z m0-907.45c-234.19 0-424.72 190.53-424.72 424.72 0 234.19 190.53 424.72 424.72 424.72 234.19 0 424.72-190.53 424.72-424.72 0-234.19-190.53-424.72-424.72-424.72z"
                              p-id="2861"></path>
                    </svg>
                </button>
                <button @click="nextMusic">>></button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "MusicControl",
        computed: {
            ...mapState(['playlist', 'playId'])
            //    4.监听到vuex里面的数据发生变化，则驱动UI界面
        },
        data() {
            return {
                paused: false,
                playMusic: false,
                isLyric: true,//默认展示歌词
                img: require('../../assets/music.png')
            }
        },
        mounted() {
            this.paoMaDeng()
            this.$store.dispatch('reqLyric', {id: this.playlist[this.playId].id})
            //    1.dispatch调用$store里的actions
        },
        updated() {
            this.$store.dispatch('reqLyric', {id: this.playlist[this.playId].id})

        },
        methods: {
            play() {
                //
                console.log(this.$refs.audio)
                if (this.paused) this.$refs.audio.pause()//暂停
                else this.$refs.audio.play()//播放
                this.paused = !this.paused//
                console.log(this.playlist)
                console.log(this.$store.state.lyric)
            },
            nextMusic() {
                this.$store.commit('addPlayId')
                this.$refs.audio.play()
            },
            prevMusic() {
                this.$store.commit('reducePlayId')
            },
            showLyric() {
                this.playMusic = true
            },
            displayLyric() {
                this.playMusic = false
            },
            paoMaDeng() {
                setInterval(() => {
                    if (this.$refs.paoMaDeng.offsetLeft < 30) {
                        this.$refs.paoMaDeng.style.left = '200px'
                    }
                    this.$refs.paoMaDeng.style.left = this.$refs.paoMaDeng.offsetLeft - 1 + 'px'
                }, 20)
            },
        }
    }
</script>

<style scoped lang="less">
    .footer {
        width: 100%;
        height: 50px;
        position: fixed;
        bottom: 0px;
        left: 0;
        background: #ef3a07;
        z-index: 3;
    }

    .playMusic {
        width: 100vw;
        height: 100vh;
        background: white;
        position: fixed;
        top: 0;
        left: 0;
        /*z-index: 3;*/
    }

    .lyricControl {
        position: fixed;
        bottom: 0;
        left: 0;
    }
    .showLyric{
        width: 100vw;
        height: 600px;
        overflow: scroll;

    }
</style>