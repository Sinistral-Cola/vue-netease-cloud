import {createStore} from 'vuex'
import {getLyric, phoneLogin} from '@/api'

export default createStore({
    state: {
        playlist: [
            {
                name: '彩券',
                id: 1823365931,
                al: {
                    id: 96680121,
                    name: '彩券',
                    pic: 109951165386012146,
                    picUrl: 'http://p3.music.126.net/NP1Zg57UUbHNzAhw7n-LeA==/109951165386012146.jpg',
                    pic_str: '109951165386012146'
                }
            }
        ],//播放列表
        playId: 0,//播放音乐默认是列表歌单中哪一首
        lyric:'',//歌词
        user: {
            isLogin:false,
            username:'未登录',
            uid:'',
        },
    },
    getters: {
    //    相当于vuex中的计算属性
        lyricList(state){
            return state.lyric.split(/\n/ig)
        // 把歌词字符串以换行符为界限分割成数组
        }
    },

    mutations: {
        setPlayList(state, newMusic) {
            state.playlist[0] = newMusic
            //    3.把vuex接收到组件传来的新歌曲，替换掉原来数组的第0条
        },
        addNewMusic(state, newMusic) {
            state.playlist.push(newMusic)
        },
        addPlayId(state){
        state.playId++

            if (state.playlist.length<=state.playId)
                state.playId=0

        },
        reducePlayId(state){
            state.playId--
            if (state.playlist.length=1){
                state.playId=0
            }
           // if (state.playId-1<0){
           //      state.playId=state.playlist.length
           //  }//点两次，第一次报错。

        },
        setLyric(state,value){
          state.lyric=value//3.mutate.state
        },

    },
    actions: {
    //    在actions中获取与后台有关的数据交互，由于歌词在多个组件中都会被用的，所以我们在vuex中获取并存储
   async reqLyric(content,payload){
       // console.log(payload.id)
       const result=await getLyric(payload.id)
       //2.commit mutations
       content.commit('setLyric',result.data.lrc.lyric)
   //逗号后面的，后台歌词数据中获取到的，是固定写法
   },
        async phoneLogin(content,payload){
       const result=await phoneLogin(payload.phone,payload.password)
            if (result.data.code==200){
                content.state.user.isLogin=true//应该在当前的actions里，commit mutations,再mutate state
            //    我们在这里偷懒了，直接修改了state
                console.log(result.data.account.id)
                content.state.user.uid=result.data.account.id
            }
            return result
        }
    },
    modules: {}
})
