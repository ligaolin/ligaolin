<template>
<div class="body">
    <div class="left">
        <div :class="route.path==item.path?'active':''" v-for="item in routes" @click="goTo(item.path)">{{ item.meta.title }}</div>
    </div>
    <div class="right">
        <div><slot></slot></div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { routes } from '@/router'
import { useRoute,useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
 
function goTo(url) {
    router.push(url)
}
</script>

<style scoped>
.body{width:100%;display:flex;justify-content:space-between;height:100vh;}
.body>.left{width:200px;border-right:solid 1px #ddd;height:100%;overflow-y:auto;padding:20px 10px;}
.body>.left>div{line-height:30px;padding:0 10px;cursor:pointer;}
.body>.left>div.active{background:#f3f3f3;color:#41B883;font-weight:bold;}
.body>.right{width:calc(100% - 200px);height:100%;background:#f5f5f5;padding:15px;}
.body>.right>div{background:white;height:100%;overflow-y:auto;padding:15px;}
</style>