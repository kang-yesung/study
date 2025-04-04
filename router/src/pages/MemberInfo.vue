<script setup>
import members from '@/members.json'
import {useRoute }from 'vue-router'

const currentRoute = useRoute();
const id = parseInt(currentRoute.params.id)

const member = members.find((m)=> m.id === id)

</script>

<template>
  <div class="mt-5">
    <img :src="member.photo" class="img">
    <h4 class="mt-2">{{member.name}}{{ member.role }}</h4>
    <p>{{ member.desc }}</p>
    <br>
    <router-link to="/members">멤버목록으로</router-link>
  </div>
</template>

<style scoped></style>