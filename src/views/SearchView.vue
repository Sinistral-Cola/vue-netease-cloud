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
    歌单

    <input type="text" v-model="searchKeyword" @keydown.enter="saveKeyword">
    <h4>搜索历史</h4>
    <ul v-for="item in keyworldList">
        <li>{{item}}</li>
    </ul>
    <h1>搜索</h1>
    <ul>
        <li v-for="item in searchMusic">
            {{item.name}}
        </li>
    </ul>
</template>

<script>
    import {searchMusic} from "@/api";

    export default {
        name: "SearchView",
        data() {
            return {
                searchKeyword: '',
                keyworldList: [],
                searchMusic: [],//搜索到的歌曲数据
            }
        },
        beforeMount() {
            this.keyworldList = localStorage.keyworldList ? JSON.parse(localStorage.keyworldList) : []
        },
        methods: {
            goback() {
                this.$router.go(-1)
            },
            async saveKeyword() {
                this.keyworldList.push(this.searchKeyword)
                localStorage.keyworldList = JSON.stringify(this.keyworldList)
                //localstorage只能存储字符串形式的数据
                const result = await searchMusic(this.searchKeyword)
                this.searchMusic = result.data.result.songs//向后台获取到的音乐数据，赋值给searchMusic
                console.log(this.searchMusic)
            }
        },

    }
</script>

<style scoped lang="less">
    button {
        border: 0;
        outline: none;
        background-color: transparent;
        vertical-align: center;
    }
</style>