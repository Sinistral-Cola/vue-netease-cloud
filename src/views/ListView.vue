<template>
    <!--    {{$route.query.id}}
     {{$route.query.picture}}-->
    <!-- <header>
         <ul class="header-one">
             <li class="HeaderLeft">
                 <router-link to="/">
                     <svg t="1650941332528" class="icon" viewBox="0 0 1024 1024" version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="2140" width="20" height="20">
                         <path d="M938.68 554.38l-0.03-85.33-695.37 0.26 171.91-184.2-62.38-58.22L86.7 512l266.11 285.11 62.38-58.22-171.96-184.25z"
                               p-id="2141"></path>
                     </svg>
                 </router-link>
                 <span>歌单</span>
             </li>
             <li class="HeaderRight">
                 <svg t="1650941447007" class="icon" viewBox="0 0 1024 1024" version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="2981" width="20" height="20">
                     <path d="M419.61244445 837.17688889c98.53155555 0 191.71555555-33.90577778 266.46755555-96.14222222l269.08444445 269.08444444c7.50933333 7.50933333 17.408 11.264 27.30666666 11.264s19.79733333-3.75466667 27.30666667-11.264c15.13244445-15.13244445 15.13244445-39.59466667 0-54.61333333L740.80711111 686.30755555c136.07822222-163.84 127.43111111-408.12088889-26.05511111-561.6071111-78.848-78.73422222-183.63733333-122.19733333-295.13955555-122.19733334-111.50222222 0-216.29155555 43.46311111-295.13955556 122.19733334-162.70222222 162.70222222-162.70222222 427.46311111 0 590.16533333 78.96177778 78.96177778 183.75111111 122.31111111 295.13955556 122.31111111zM179.2 179.42755555c64.28444445-64.17066667 149.61777778-99.55555555 240.41244445-99.55555555 90.79466667 0 176.24177778 35.38488889 240.41244444 99.55555555 132.55111111 132.55111111 132.55111111 348.38755555 0 480.93866667-64.28444445 64.17066667-149.61777778 99.55555555-240.41244444 99.55555556S243.48444445 724.53688889 179.2 660.36622222C46.64888889 527.70133333 46.64888889 311.97866667 179.2 179.42755555z"
                           fill="#333303" p-id="2982"></path>
                 </svg>
                 <svg t="1650941487502" class="icon" viewBox="0 0 1024 1024" version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="3783" width="20" height="20">
                     <path d="M849.1 128 174.9 128c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 149 875 128 849.1 128z"
                           p-id="3784"></path>
                     <path d="M849.1 768 174.9 768c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 789 875 768 849.1 768z"
                           p-id="3785"></path>
                     <path d="M849.1 448 174.9 448c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 469 875 448 849.1 448z"
                           p-id="3786"></path>
                 </svg>
             </li>
         </ul>

         <div class="HeaderCenter">
             <img :src="imgs" alt="">
             <span class="HeaderCenter-one">{{names}}</span>
             <div class="HeaderCenter-three">
                 <img :src="avatarUrl" alt="">
                 <p>{{nickname}}</p>
             </div>
             <p id="HeaderCenter-two">{{description}}</p>
         </div>
         <ul>
             <li>
                 <svg t="1650950269589" class="icon" viewBox="0 0 1024 1024" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" p-id="2789" width="30" height="30">
                     <path d="M864 896H160c-52.8 0-96-43.2-96-96V224c0-52.8 43.2-96 96-96h704c52.8 0 96 43.2 96 96v576c0 52.8-43.2 96-96 96zM160 192c-17.6 0-32 14.4-32 32v576c0 17.6 14.4 32 32 32h704c17.6 0 32-14.4 32-32V224c0-17.6-14.4-32-32-32H160z m128 384c-17.6 0-32-14.4-32-32v-64c0-17.6 14.4-32 32-32s32 14.4 32 32v64c0 17.6-14.4 32-32 32z m224 0c-17.6 0-32-14.4-32-32v-64c0-17.6 14.4-32 32-32s32 14.4 32 32v64c0 17.6-14.4 32-32 32z m224 0c-17.6 0-32-14.4-32-32v-64c0-17.6 14.4-32 32-32s32 14.4 32 32v64c0 17.6-14.4 32-32 32z"
                           p-id="2790"></path>
                 </svg>
                 <p>{{pingLun}}</p>
             </li>
             <li>
                 <svg t="1650950315425" class="icon" viewBox="0 0 1024 1024" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" p-id="3603" width="30" height="30">
                     <path d="M810.585696 666.655728a181.803565 181.803565 0 0 0-155.336965 83.374308l-264.515455-115.712338a154.072349 154.072349 0 0 0 12.435388-65.489029 175.450377 175.450377 0 0 0-34.174735-104.210358l236.121822-169.578946a185.115654 185.115654 0 0 0 139.800257 62.508149 178.822685 178.822685 0 1 0-186.41038-178.642026 223.295005 223.295005 0 0 0 12.435388 65.519138h-3.01099l-242.32446 178.491476a194.088404 194.088404 0 0 0-108.756952-32.759569 178.822685 178.822685 0 1 0 0 357.314162 185.115654 185.115654 0 0 0 139.800257-62.508149l270.718094 118.663109a169.307958 169.307958 0 0 0-6.202639 41.702209 186.681369 186.681369 0 0 0 372.82076 0 180.47873 180.47873 0 0 0-183.30906-178.672136zM744.916008 59.79073a119.205087 119.205087 0 1 1-124.26355 119.114758 122.125747 122.125747 0 0 1 124.26355-119.114758zM216.758284 687.943426a119.235197 119.235197 0 1 1 124.26355-119.114757 122.155857 122.155857 0 0 1-124.26355 119.114757z m593.827412 276.469085a119.205087 119.205087 0 1 1 124.26355-119.084647 122.125747 122.125747 0 0 1-124.26355 119.084647z"
                           p-id="3604"></path>
                 </svg>
                 <p>{{shareCount}}</p>
             </li>
             <li>
                 <svg t="1650950398715" class="icon" viewBox="0 0 1024 1024" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" p-id="5123" width="30" height="30">
                     <path d="M551.783587 591.158874 551.783587 249.237481 472.216413 249.237481 472.216413 591.160921 336.806397 455.740672 280.542976 512.00921 511.995395 743.448326 743.454978 512.00921 687.192579 455.740672Z"
                           p-id="5124"></path>
                     <path d="M982.400045 313.280076c-25.713638-60.794621-62.521962-115.3921-109.403712-162.27385-46.880727-46.879704-101.477182-83.691097-162.272827-109.403712-62.950727-26.626427-129.811508-40.126906-198.727087-40.126906-68.915579 0-135.778406 13.500479-198.72811 40.126906-60.794621 25.712615-115.390054 62.524009-162.269757 109.403712-46.879704 46.88175-83.687004 101.479229-109.400642 162.27385-26.624381 62.951751-40.123836 129.813554-40.123836 198.727087 0 68.915579 13.499455 135.77636 40.123836 198.72504 25.713638 60.794621 62.520939 115.390054 109.400642 162.269757 46.879704 46.87868 101.475136 83.687004 162.269757 109.399619 62.949704 26.624381 129.811508 40.122813 198.72811 40.122813s135.777383-13.498432 198.727087-40.122813c60.795645-25.712615 115.3921-62.521962 162.272827-109.399619 46.880727-46.879704 83.689051-101.475136 109.403712-162.269757 26.625404-62.949704 40.124859-129.810484 40.124859-198.72504C1022.525927 443.093631 1009.025449 376.230804 982.400045 313.280076zM679.751097 909.096017c-53.122895 22.468734-109.563348 33.861202-167.754678 33.861202-58.182121 0-114.617457-11.392468-167.738305-33.861202-51.316759-21.703301-97.407494-52.780087-136.993071-92.363617-39.585577-39.58353-70.663386-85.672218-92.368734-136.986931-22.470781-53.119825-33.864272-109.556185-33.864272-167.738305 0-58.18826 11.394515-114.63076 33.864272-167.754678 21.705348-51.316759 52.783157-97.40954 92.368734-136.995117 39.584554-39.58353 85.675288-70.660316 136.992047-92.365664 53.120848-22.468734 109.556185-33.861202 167.738305-33.861202 58.19133 0 114.631784 11.392468 167.754678 33.861202 51.316759 21.705348 97.40647 52.782134 136.988977 92.365664s70.656223 85.676311 92.360548 136.995117c22.466688 53.121871 33.858132 109.563348 33.858132 167.754678 0 58.184167-11.391445 114.620527-33.858132 167.738305-21.704324 51.316759-52.77804 97.40647-92.359524 136.986931C777.157567 856.314906 731.067856 887.392716 679.751097 909.096017z"
                           p-id="5125"></path>
                 </svg>
                 <p>下载</p>
             </li>
             <li>
                 <svg t="1650950453062" class="icon" viewBox="0 0 1024 1024" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" p-id="6586" width="30" height="30">
                     <path d="M913.92 1016.32H354.56a31.36 31.36 0 0 1 0-64h559.36a31.36 31.36 0 0 0 31.36-31.36V569.6a31.36 31.36 0 0 1 64 0v352.64a94.08 94.08 0 0 1-95.36 94.08z"
                           fill="#323333" p-id="6587"></path>
                     <path d="M761.6 844.8H113.28A94.08 94.08 0 0 1 19.2 750.72V103.04A94.08 94.08 0 0 1 113.28 8.96h547.84a31.36 31.36 0 1 1 0 64H113.28a31.36 31.36 0 0 0-31.36 31.36v646.4a31.36 31.36 0 0 0 31.36 31.36H761.6a31.36 31.36 0 0 0 30.72-31.36V569.6a32 32 0 0 1 64 0v181.12a94.08 94.08 0 0 1-94.72 94.08z"
                           fill="#323333" p-id="6588"></path>
                     <path d="M913.92 1016.32H301.44a31.36 31.36 0 0 1 0-64h612.48a31.36 31.36 0 0 0 31.36-31.36V569.6a31.36 31.36 0 0 1 64 0v352.64a94.08 94.08 0 0 1-95.36 94.08zM482.56 581.76a30.72 30.72 0 0 1-22.4-10.24L245.12 344.32a31.36 31.36 0 0 1 0-44.16 30.72 30.72 0 0 1 44.16 0l192 203.52L960 29.44a31.36 31.36 0 0 1 44.16 0 30.08 30.08 0 0 1 0 44.16L504.32 572.16a28.8 28.8 0 0 1-21.76 9.6z"
                           fill="#323333" p-id="6589"></path>
                 </svg>
                 <p>分享</p>

             </li>
         </ul>
     </header>-->
    <!--  <footer>
          <ul class="footer-first">
              <li class="footer-first-left">
                  <svg t="1650954561653" class="icon" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg"
                       p-id="7391" width="40" height="40">
                      <path d="M435.2 665.6V358.4l256 153.6z" p-id="7392"></path>
                      <path d="M512 204.8c168.96 0 307.2 138.24 307.2 307.2s-138.24 307.2-307.2 307.2-307.2-138.24-307.2-307.2 138.24-307.2 307.2-307.2m0-51.2c-199.68 0-358.4 158.72-358.4 358.4s158.72 358.4 358.4 358.4 358.4-158.72 358.4-358.4-158.72-358.4-358.4-358.4z"
                            p-id="7393"></path>
                  </svg>
                  <span class="footer-first-left-one">播放全部</span>
                  <span class="footer-first-left-two">{{+tracksLength}}</span>
              </li>
              <div class="footer-first-right">
                  <p>+收藏</p>
              </div>
          </ul>
          <div class="footer-second" v-for="(item,index) in tracks">
              <span class="footer-second-one">{{index+1}}</span>
              <p class="footer-second-two" title="{{item.name}}"> {{item.name}}</p>
               歌曲名
              <p class="footer-second-three" :title="item.al.name">{{item.al.name}}</p>
               简介

          </div>

      </footer> -->

    <ListViewHeader :obj="obj"/>
    <ListViewCenter :obj="obj"/>
    <ListViewBottom :obj="obj"/>
    <div :style="conTop"></div>
</template>

<script>
    import {getPlayListDetail} from "@/api";
    import ListViewHeader from "@/components/list-view/ListViewHeader";
    import ListViewCenter from "@/components/list-view/ListViewCenter";
    import ListViewBottom from "@/components/list-view/ListViewBottom";

    export default {
        name: "ListView",
        components: {ListViewBottom, ListViewCenter, ListViewHeader},
        data() {
            let pic={url:'this.obj.imgs'};
            return {
                aaa: [],
                obj: {
                    imgs: [],
                    names: '',
                    pingLun: '',
                    description: '',
                    shareCount: '',
                    avatarUrl: '',
                    nickname: '',
                    tracks: '',
                    tracksLength: '',
                },
                conTop:{
                    backgroundImage:'url('+pic.url+')'
                },

            }
        },

        created() {
            // console.log(this.$router.query.id)
            //通过id向后端要数据
            //收到数据后，更新自己的data
            this.getPlayListMusic();
        },
        methods: {
            async getPlayListMusic() {
                //2.使用this.$router.query来接收传来的参数
                //3.根据参数id向后台查找对应的歌单里的歌曲等数据信息
                const res = await getPlayListDetail(this.$route.query.id, this.$route.query.picture)
                console.log(res.data)
                //更新数据后，更新自己的data
                this.obj.imgs = res.data.playlist.coverImgUrl
                this.obj.names = res.data.playlist.name
                this.obj.pingLun = res.data.playlist.commentCount
                this.obj.description = res.data.playlist.description
                this.obj.shareCount = res.data.playlist.shareCount
                this.obj.avatarUrl = res.data.playlist.creator.avatarUrl
                this.obj.nickname = res.data.playlist.creator.nickname
                this.obj.tracks = res.data.playlist.tracks
                this.obj.tracksLength = res.data.playlist.tracks.length
            }
        }
    }
</script>

<style scoped lang="less">
    header {
        width: 100%;
        height: 300px;
        /*border: 1px solid red;*/

        .header-one {
            width: 300px;
            height: 50px;
            /*border: 1px solid red;*/

            .HeaderLeft {
                /*display: inline-block;*/
                width: 80px;
                /*border: 1px solid red;*/
                display: flex;
                justify-content: space-around;
            }

            .HeaderRight {
                width: 80px;
                /*border: 1px solid red;*/
                display: flex;
                justify-content: space-around;
                float: right;
            }
        }

        .HeaderCenter {
            width: 300px;
            height: 150px;
            /*margin-left: 20px;*/
            /*border: #42b983 1px solid;*/
            margin: 0 auto;

            .HeaderCenter-one {
                font-size: 18px;
                font-weight: bold;
                margin-left: 18px;
                /*border: #42b983 1px solid;*/
            }

            #HeaderCenter-two {
                width: 160px;
                height: 62px;
                /*border: #42b983 1px solid;*/
                overflow: hidden;
                margin-top: -2px;
                padding-left: 20px;
                font-size: 12px;
            }

            img {
                float: left;
                width: 40%;
                height: 100%;
            }

            .HeaderCenter-three {
                width: 160px;
                height: 40px;
                /*border: #42b983 1px solid;*/
                overflow: hidden;
                padding-left: 10px;

                img {
                    width: 20px;
                    height: 20px;
                    border-radius: 10px;
                    padding-left: 20px;
                    padding-top: 10px;
                }

                p {
                    padding-left: 20px;
                    font-size: 12px
                }
            }


            span {
                margin-left: 20px;
            }
        }

        ul {
            width: 300px;
            height: 50px;
            display: flex;
            /*border: #42b983 1px solid;*/
            justify-content: space-between;
            margin: 0 auto;
            padding: 10px;

            li {
                list-style: none;
            }

            p {
                margin-top: -5px;
                font-size: 12px;
                text-align: center;
            }
        }
    }

    footer {
        width: 300px;
        margin: 0 auto;
        height: 500px;
        /*border: blue 1px solid;*/

        .footer-first {
            width: 260px;
            height: 40px;
            /*border: #59ff00 1px solid;*/
            margin: 0 auto;

            .footer-first-left {
                display: flex;
                justify-content: space-around;
                width: 150px;
                height: 90%;
                /*border: orange 1px solid;*/
                margin-left: -45px;

                .footer-first-left-one {
                    margin-top: 7px;
                    font-size: 18px;
                    font-weight: bold;
                    margin-left: -10px;
                }

                .footer-first-left-two {
                    width: 10px;
                    font-weight: lighter;
                    margin-top: 9px;
                }
            }

            .footer-first-right {
                width: 100px;
                height: 80%;
                background: #ef3a07;
                border-radius: 15px;
                display: inline-block;
                float: right;
                margin-top: -35px;
            }

            p {
                font-size: 14px;
                color: #d9d9d9;
                margin-top: 5px;
            }
        }

        .footer-second {
            list-style: none;
            border: 1px salmon solid;
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
        }

    }
</style>