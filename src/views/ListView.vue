<template>
    ass
    {{$route.query}}
</template>

<script>
    import {getPlayListDetail} from "@/api";

    export default {
        name: "ListView",
       data(){
         return{
             aaa:[]
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
                const res = await getPlayListDetail(this.$route.query.id)
                console.log(res.data)
                this.aaa = res.data
                //更新数据后，更新自己的data
            }
        }
    }
</script>

<style scoped>

</style>