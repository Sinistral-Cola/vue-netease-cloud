<template>
    <h2>
        发现好歌单
        <button>查看更多</button>
    </h2>
    <div class="swiper-container swiper-music-list">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in musicList">
                <router-link :to="{path:'/list-view',query:{id:item.id,picture:item.picUrl}}">
<!--                 1.通过路由，向下一个组件传参数-->
                    <img :src="item.picUrl" alt="">
                    <span v-if="item.playCount<100000000">{{(item.playCount/100000).toFixed(1)+'万'}}</span>
                <!--二：判断过亿-->
                <span v-else>{{(item.playCount/100000000).toFixed(1)+'亿'}}</span>
                    <p id="ListName">{{item.name}}</p>
                </router-link>
<!--          计算属性      <p v-for="item in  newplayCountdata">{{item.playCount+'万'}}</p>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/css/swiper.min.css'
    import {getMusicList} from "@/api";

    export default {
        name: "MusicList",
        data() {
            return {
                musicList: [],
                playCountdata: [],
            }
        },
        created() {
            this.getMusicListData()//调动methods里的异步方法

        },
        updated() {
            const mySwiper = new Swiper('.swiper-music-list', {
                spaceBetween: 2,
                autoplay: {
                    delay: 3000
                },
                slidesPerView: 3,
                slidesPerGroup: 3,
                loop: true,
            })


        },//调用methods里的异步方法
        methods: {
            async getMusicListData() {
                const res = await getMusicList(10)//使用封装好的api方法去后台获取歌单列表数据
                this.musicList = res.data.result
                console.log(this.musicList)
            }
        },
        computed: {
        //     newplayCountdata() {
        //         const arr = []
        //         for (let i in this.musicList) {
        //             const obj = {}
        //             obj.playCount = this.musicList[i].playCount<100000000?
        //                 (this.musicList[i].playCount/10000).toFixed(1):
        //                 (this.musicList[i].playCount/100000000).toFixed(2)
        //             arr.push(obj)
        //         }
        //         return arr;
        // },
        },
    }
</script>

<style scoped lang="less">
    button {
        float: right;
        width: 80px;
        height: 30px;
        background: white;
        border-radius: 15px;
        border: 1px solid #ededed;
    }

    img {
        width: 100px;
        height: 100px;
    }

    .swiper-slide {
        width: 30vw;
        /*height: 37vw;*/
        /*text-align: center;*/
        font-size: 12px;

        img {
            width: 100%;
        }

        span {
            position: absolute;
            top: 0;
            right: 10px;
            color: white;
        }

        p {
            margin: 0;
        }
    }

    #ListName{
        text-decoration:black;
        color: black
    }
    router-link-active{
        text-decoration:none;

    }

</style>