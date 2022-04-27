<template>

<!--    <div class="container">
        <div>
            <button @click="goback">
                <svg t="1651026578126" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="2061" width="20" height="20">
                    <path d="M143 462h800c27.6 0 50 22.4 50 50s-22.4 50-50 50H143c-27.6 0-50-22.4-50-50s22.4-50 50-50z"
                          p-id="2062"></path>
                    <path d="M116.4 483.3l212.1 212.1c19.5 19.5 19.5 51.2 0 70.7s-51.2 19.5-70.7 0L45.6 554c-19.5-19.5-19.5-51.2 0-70.7 19.6-19.6 51.2-19.6 70.8 0z"
                          p-id="2063"></path>
                    <path d="M328.5 328.6L116.4 540.7c-19.5 19.5-51.2 19.5-70.7 0s-19.5-51.2 0-70.7l212.1-212.1c19.5-19.5 51.2-19.5 70.7 0s19.5 51.2 0 70.7z"
                          p-id="2064"></path>
                </svg>
            </button>
            歌单
        </div>
        <div>
            <router-link to="/search">
                <svg t="1650613108092" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="2823" width="20" height="20">
                    <path d="M988.6 868.5L750.1 629.9c-2.8-2.7-5.8-4.9-8.8-7.2 40.3-61.8 63.8-135.5 63.8-214.8 0-218-176.6-394.6-394.6-394.6-217.9 0-394.6 176.6-394.6 394.6 0 218 176.7 394.7 394.6 394.7 79.3 0 153.1-23.6 215-63.9 2.2 3 4.3 6 7.1 8.7L871.1 986c16.3 16.2 37.5 24.3 58.8 24.3 21.3 0 42.5-8.1 58.8-24.3 32.3-32.4 32.3-85-0.1-117.5M410.5 677.9c-148.9 0-270-121.2-270-270 0-148.9 121.1-270 270-270s270.1 121.2 270.1 270c-0.1 148.9-121.3 270-270.1 270"
                          fill="" p-id="2824"></path>
                </svg>
            </router-link>
            <router-link to="/login">
                <svg t="1650612897089"
                     class="icon"
                     viewBox="0 0 1024 1024"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="2003" width="20" height="20">
                    <path d="M849.1 128 174.9 128c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 149 875 128 849.1 128z"
                          p-id="2004"></path>
                    <path d="M849.1 768 174.9 768c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 789 875 768 849.1 768z"
                          p-id="2005"></path>
                    <path d="M849.1 448 174.9 448c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 469 875 448 849.1 448z"
                          p-id="2006"></path>
                </svg>
            </router-link>
        </div>
   </div>-->
    <ul class="header-one">
        <li class="HeaderLeft">
            <button @click="goback">
                <svg t="1650941332528" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="2140" width="20" height="20">
                    <path d="M938.68 554.38l-0.03-85.33-695.37 0.26 171.91-184.2-62.38-58.22L86.7 512l266.11 285.11 62.38-58.22-171.96-184.25z"
                          p-id="2141"></path>
                </svg>
            </button>
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
        <img :src="obj.imgs" alt="">
        <p class="HeaderCenter-one">{{obj.names}}</p>
        <div class="HeaderCenter-three">
            <img :src="obj.avatarUrl" alt="">
            <p>{{obj.nickname}}</p>
        </div>
        <p class="HeaderCenter-two">{{obj.description}}</p>
    </div>
</template>

<script>
    export default {
        name: "ListViewHeader",
        props: ['obj'],
        methods: {
            goback() {
                this.$router.go(-1)
            }
        },
    }
</script>

<style scoped lang="less">
    .header-one {
        width: 300px;
        height: 50px;
        /*border: 1px solid red;*/

        .HeaderLeft {
            /*display: inline-block;*/
            width: 80px;
            /*border: 1px solid red;*/
            display: flex;margin-left: -15px;
            justify-content: space-around;
        }

        .HeaderRight {
            width: 80px;
            /*border: 1px solid red;*/
            display: flex;
            justify-content: space-around;
            float: right;margin-top: -25px;
        }
        button {
            border: 0;
            outline: none;
            background-color: transparent;
            vertical-align: center;
        }
    }

    /*.container {*/
    /*    width: 100%;*/
    /*    display: flex;*/
    /*    justify-content: space-between;*/
    /*    margin: 10px;*/

    /*    button {*/
    /*        border: 0;*/
    /*        outline: none;*/
    /*        background-color: transparent;*/
    /*        vertical-align: center;*/
    /*    }*/
    /*}*/

    .HeaderCenter {
        width: 300px;
        height: 150px;
        /*border: #42b983 1px solid;*/
        margin: 0 auto;

        .HeaderCenter-one {
            width: 150px;
            display: inline-block;
            font-size: 18px;
            font-weight: bold;
            margin-left: 20px;
            margin-top: -1px;
            /*border: #42b983 1px solid;*/
        }

        .HeaderCenter-two {
            width: 160px;
            height: 62px;
            /*border: #42b983 1px solid;*/
            overflow: hidden;float: right;
            font-size: 12px;
        }

        img {
            float: left;
            width: 40%;
            height: 100%;
        }

        .HeaderCenter-three {
            width: 130px;
            height: 30px;
            /*border: #42b983 1px solid;*/
            float: right;
            margin-top: -20px;

            img {
                width: 20px;
                height: 20px;
                margin-top: 10px;
                border-radius: 15px;
            }

            p {
                padding-bottom: 10px;
                padding-left: 30px;
                font-size: 12px;
                /*border: #42b983 1px solid;*/
            }

        }
            span {
                margin-left: 20px;
                border: #42b983 1px solid;
            }

    }
</style>