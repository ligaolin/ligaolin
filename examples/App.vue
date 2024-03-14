<template>
<mainMenu><RouterView /></mainMenu>
</template>

<script setup>
import { RouterView } from 'vue-router'
import mainMenu from '@/components/mainMenu.vue'
</script>

<style>
body{margin:0;font-size:14px;}
*{box-sizing:border-box;}
</style>
