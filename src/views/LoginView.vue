<template>
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
    <input type="text" v-model="phone">
    <input type="password" v-model="password">
    <input type="button" value="登录" @click="toLogin">
    <h1>登录界面</h1>
</template>

<script>
    import {phoneLogin} from "@/api";

    export default {
        name: "LoginView",
        data() {
            return {
                phone: '',
                password: '',
            }
        },
        methods: {
            goback() {
                this.$router.go(-1)
            },
            async toLogin() {
                //     const result=await phoneLogin(this.phone,this.password)
                // console.log(result)
            const result=await this.$store.dispatch('phoneLogin',{phone: this.phone,password: this.password})
                if(result.data.code==200){
                    this.$router.push('/profile')//通过路由跳转页面
                }
                console.log(result.data)
            }
        },

    }
</script>

<style scoped>
    button {
        border: 0;
        outline: none;
        background-color: transparent;
        vertical-align: center;
    }
</style>