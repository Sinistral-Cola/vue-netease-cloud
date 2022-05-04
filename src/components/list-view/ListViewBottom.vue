<template>
    <footer>
        <div class="footer-first">
            <div class="footer-first-left">
                <svg t="1650954561653" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="7391" width="40" height="40">
                    <path d="M435.2 665.6V358.4l256 153.6z" p-id="7392"></path>
                    <path d="M512 204.8c168.96 0 307.2 138.24 307.2 307.2s-138.24 307.2-307.2 307.2-307.2-138.24-307.2-307.2 138.24-307.2 307.2-307.2m0-51.2c-199.68 0-358.4 158.72-358.4 358.4s158.72 358.4 358.4 358.4 358.4-158.72 358.4-358.4-158.72-358.4-358.4-358.4z"
                          p-id="7393"></path>
                </svg>
                <p class="footer-first-left-one">播放全部</p>
                <span class="footer-first-left-two">共{{obj.tracksLength}}首</span>
            </div>

            <div class="footer-first-right">
                <p class="footer-first-right-one">+收藏({{obj.pingLun}})</p>
            </div>
        </div>
        <div class="footer-second" v-for="(item,index) in obj.tracks" @click="showIndex(index)">

            <span class="footer-second-one">{{index+1}}</span>

            <div id="aaaaa" class="footer-second-one">
                <img :src="imgs" alt="">
            </div>

            <p class="footer-second-two" title="{{item.name}}"> {{item.name}}</p>
            <!--            歌曲名-->
            <p class="footer-second-three" :title="item.al.name">{{item.al.name}}</p>
            <!--            简介-->

            <div class="footer-thirds">
                <button>
<!--暂停-->
                <svg t="1651469866387" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       v-if="paused"
                     xmlns="http://www.w3.org/2000/svg" p-id="2859" width="20" height="20">
                    <path d="M423.77 731.22c-12.74 0-25.47-3.35-37.08-10.05-23.22-13.4-37.08-37.41-37.08-64.22V357.16c0-26.81 13.86-50.81 37.08-64.22 23.22-13.4 50.94-13.4 74.15 0l259.62 149.89c23.22 13.4 37.08 37.41 37.08 64.22 0 26.81-13.86 50.81-37.08 64.22l-259.62 149.9c-11.6 6.7-24.34 10.05-37.07 10.05z m0.08-390.27c-3.73 0-6.68 1.37-8.16 2.22-2.43 1.4-8.08 5.57-8.08 13.99v299.79c0 8.42 5.65 12.59 8.08 13.99 2.43 1.4 8.86 4.21 16.15 0l259.62-149.89c7.29-4.21 8.08-11.18 8.08-13.99s-0.79-9.78-8.08-13.99l-259.62-149.9c-2.86-1.65-5.59-2.22-7.99-2.22z"
                          p-id="2860"></path>
                    <path d="M514.29 989.78c-65.15 0-128.38-12.77-187.91-37.95-57.49-24.31-109.11-59.12-153.43-103.44-44.32-44.32-79.13-95.94-103.44-153.43-25.18-59.53-37.95-122.75-37.95-187.91s12.77-128.38 37.95-187.91c24.31-57.49 59.12-109.11 103.44-153.43 44.32-44.32 95.94-79.13 153.43-103.44 59.53-25.18 122.75-37.95 187.91-37.95s128.37 12.78 187.9 37.96c57.49 24.31 109.11 59.12 153.43 103.44 44.32 44.32 79.13 95.94 103.44 153.43 25.18 59.53 37.95 122.75 37.95 187.91s-12.77 128.38-37.95 187.91c-24.31 57.49-59.12 109.11-103.44 153.43-44.32 44.32-95.94 79.13-153.43 103.44-59.53 25.17-122.75 37.94-187.9 37.94z m0-907.45c-234.19 0-424.72 190.53-424.72 424.72 0 234.19 190.53 424.72 424.72 424.72 234.19 0 424.72-190.53 424.72-424.72 0-234.19-190.53-424.72-424.72-424.72z"
                          p-id="2861"></path>
                </svg>
<!--播放-->
                <svg t="1651469885380" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     v-else
                     xmlns="http://www.w3.org/2000/svg" p-id="3015" width="20" height="20">
                    <path d="M512 512m-508.928 0a508.928 508.928 0 1 0 1017.856 0 508.928 508.928 0 1 0-1017.856 0Z"
                          fill="#3C3C3C" p-id="3016"></path>
                    <path d="M362.788571 292.571429h42.422858v438.857142h-42.422858zM618.788571 292.571429h42.422858v438.857142h-42.422858z"
                          fill="#FFFFFF" p-id="3017"></path>
                </svg>

                </button>
            </div>
        </div>
    </footer>

    <!--   思路：1.应该使用计算属性，计算被点击对象的索引值，然后根据索引值展示对应索引值的照片和位置-->
</template>

<script>
    export default {
        name: "ListViewBottom",
        props: ['obj'],
        data() {
            return {
                imgs: '',
                a: true,
                paused:false,
            }
        },
        methods: {
            showIndex(index) {
                // console.log(this.obj.tracks[index].al.picUrl)
                this.imgs = this.obj.tracks[index].al.picUrl
                // console.log(this.obj.tracks[index])
                console.log(this.obj.tracks.indexOf(this.obj.tracks[index]))
            }
        },
        created() {
        },
        computed: {
            footerSecond() {

            }
        }
    }
</script>

<style scoped lang="less">
    footer {
        width: 300px;
        margin: 0 auto;
        height: 850px;
        /*border: blue 1px solid;*/

        .footer-first {
            width: 300px;
            height: 40px;
            /*border: #59ff00 1px solid;*/
            margin: 0 auto;
            list-style: none;

            .footer-first-left {
                width: 180px;
                height: 40px;
                position: relative;
                /*border: orange 1px solid;*/
                display: inline-block;

                .footer-first-left-one {
                    font-size: 18px;;
                    font-weight: bold;
                    display: inline-block;
                    position: absolute;
                    top: -10px;
                }

                .footer-first-left-two {
                    font-weight: lighter;
                    position: absolute;
                    display: inline-block;
                    top: 10px;
                    left: 120px;
                }
            }

            .footer-first-right {
                width: 100px;
                height: 80%;
                background: #ef3a07;
                border-radius: 15px;
                display: inline-block;
                float: right;
                top: 5px;
            }

            .footer-first-right-one {
                font-size: 14px;
                color: #e7e1e1;
                /*font-weight: bold;*/
                margin-top: 5px;
                margin-left: 5px;
            }
        }

        .footer-second {
            list-style: none;
            /*border: 1px salmon solid;*/
            padding-top: 10px;


            .footer-second-one {
                /*border: 1px seagreen solid;*/
                display: inline-block;
                margin-top: 18px;
                height: 18px;
                width: 10px;
            }

            .footer-second-two {
                /*border: 1px #24096c solid;*/
                height: 18px;
                font-size: 14px;
                width: 70%;
                overflow: hidden;
                /*margin:0 auto;*/
                font-weight: bold;
                margin-top: -28px;
                margin-left: 22px;
            }

            .footer-second-three {
                /*border: 1px #790961 solid;*/
                font-size: 12px;
                font-weight: lighter;
                width: 70%;
                overflow: hidden;
                margin-top: -14px;
                margin-left: 22px;
            }


            .footer-thirds {
                width: 20px;
                /*border: 1px solid red;*/
                height: 50px;
                display: inline-block;
                float: right;
                margin-top: -50px;
            }
        }
    }

    #aaaaa {
        width: 20px;
        height: 20px;
        background: #42b983;
        margin-top: -100px;

        img {
            width: 20px;
            height: 20px;
            border-radius: 10px;
        }
    }
</style>