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
                <p class="footer-first-right-one">+收藏</p>
            </div>
        </div>
        <div class="footer-second" v-for="(item,index) in obj.tracks">
            <span class="footer-second-one">{{index+1}}</span>
            <p class="footer-second-two" title="{{item.name}}"> {{item.name}}</p>
            <!--            歌曲名-->
            <p class="footer-second-three" :title="item.al.name">{{item.al.name}}</p>
            <!--            简介-->

        <div class="footer-thirds">
            <svg t="1651038402100" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="6932" width="20" height="20">
                <path d="M512.77 962C264.9 962 63.23 760.33 63.23 512.44c0-247.85 201.67-449.52 449.54-449.52s449.54 201.67 449.54 449.52C962.31 760.33 760.64 962 512.77 962z m0-824.13c-206.55 0-374.59 168.04-374.59 374.57 0 206.57 168.04 374.61 374.59 374.61s374.59-168.04 374.59-374.61c0-206.53-168.04-374.57-374.59-374.57z"
                      fill="#4181BA" p-id="6933"></path>
                <path d="M419.51 790.12c-5.56 0-11.16-1.24-16.36-3.77a37.448 37.448 0 0 1-21.11-33.7V272.28c0-14.34 8.2-27.45 21.11-33.7 12.9-6.29 28.23-4.61 39.56 4.28l304.75 240.17c9 7.1 14.27 17.93 14.27 29.42s-5.27 22.32-14.27 29.42l-304.75 240.2a37.583 37.583 0 0 1-23.2 8.05z m37.47-440.59V675.4l206.74-162.95-206.74-162.92z"
                      fill="#2AAAA8" p-id="6934"></path>
            </svg>
            <svg t="1651038569118" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="7901" width="20" height="20">
                <path d="M98.357122 818.73194c-14.213723 0-25.764803 11.532661-25.764803 25.76071 0 14.233166 11.55108 25.770943 25.764803 25.770943M922.866648 818.73194 98.128925 818.73194c-14.21884 0-25.770943 11.532661-25.770943 25.76071 0 14.233166 11.552104 25.770943 25.770943 25.770943l824.737724 0c14.213723 0 25.764803-11.538801 25.764803-25.770943C948.633498 830.262554 937.081395 818.73194 922.866648 818.73194zM98.357122 483.770052c-14.213723 0-25.764803 11.537777-25.764803 25.76992 0 14.229073 11.55108 25.764803 25.764803 25.764803M922.866648 483.770052 98.128925 483.770052c-14.21884 0-25.770943 11.537777-25.770943 25.76992 0 14.229073 11.552104 25.764803 25.770943 25.764803l824.737724 0c14.213723 0 25.764803-11.537777 25.764803-25.764803C948.633498 495.307829 937.081395 483.770052 922.866648 483.770052zM98.357122 148.815327c-14.213723 0-25.764803 11.539824-25.764803 25.768897 0 14.227026 11.55108 25.76378 25.764803 25.76378M98.128925 200.346981l824.737724 0c14.213723 0 25.764803-11.536754 25.764803-25.76378 0-14.229073-11.55108-25.768897-25.764803-25.768897L98.128925 148.814304c-14.21884 0-25.770943 11.539824-25.770943 25.768897C72.359005 188.81125 83.911108 200.346981 98.128925 200.346981z"
                      p-id="7902"></path>
            </svg>
        </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "ListViewBottom",
        props: ['obj'],
    }
</script>

<style scoped lang="less">
    footer {
        width: 300px;
        margin: 0 auto;
        height: 500px;
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
                width: 80px;
                height: 80%;
                background: #ef3a07;
                border-radius: 15px;
                display: inline-block;
                float: right;
                top: 5px;
            }

            .footer-first-right-one {
                font-size: 14px;
                color: #e7e1e1;font-weight: bold;
                margin-top: 5px;margin-left: 5px;
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
            height: 50px;display: inline-block;
            float: right;margin-top: -50px;
        }
        }
    }
</style>