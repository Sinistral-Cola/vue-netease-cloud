<template>
    <HeaderCom/>
    <h1>我的</h1>
    <p>{{userDetail.nickname}}</p>
</template>

<script>
    import HeaderCom from "@/components/header/HeaderCom";
    import {userDetail} from "@/api";

    export default {
        name: "ProfileView",
        data(){
          return{
              account:'',//用户id
              userDetail:{},//用户详情
          }
        },
        components: {HeaderCom},
        created() {
        //    获取用户详情信息
            this.getUserDetail()
        },
        methods:{
           async getUserDetail(){
              const result=await userDetail(this.$store.state.user.uid)
               console.log(result)
               this.userDetail.nickname=result.data.profile.nickname

           }
        }
    }
</script>

<style scoped>

</style>