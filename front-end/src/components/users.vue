<template>
<div dir="rtl" class="mr-80">
    <table>
        <th class="px-16">اسم</th>
        <th class="px-16">شماره عضویت</th>
        <th class="px-16">تاریخ اتمام عضویت</th>
        <th class="px-16">ادرس</th> 
        <router-link to="/users/create">
        <button class="border-2 border-sky-500 p-2 rounded">عضو جدید</button>
        </router-link>
        <User v-for="user in users" :key="user.id" :name="user.firstName + ' ' + user.lastName"
         :id="user.memberId" :created="user.expireDate" :address="user.address" />
    </table>
</div>
</template>

<script setup>
import User from "./user.vue";
import { userStore } from '../store/user'
import { computed } from "vue";

const store = userStore()

store.fetchusers();

const users = computed(() => store.allusers);


</script>

<style>

</style>