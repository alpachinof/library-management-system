<template>
<div dir="rtl" class="mr-80">
    <table>
        <th class="px-10">کتاب</th>
        <th class="px-10"> عضو</th>
        <th class="px-10">تاریخ امانت</th>
        <th class="px-10">تاریخ تحویل معین شده</th>
        <th class="px-6">تاریخ تحویل </th>
        <th class="px-10">وضعیت</th>
        <th class="px-10">وضعیت</th>
        <router-link to="/loans/create">
         <button class="border-2 border-sky-500 p-2 rounded">امانت جدید</button>
         </router-link>
        <loan v-for="loan in loans" :key="loan.id" :book="loan.title" :member="loan.firstName + ' ' + loan.lastName"
         :issue_date="loan.issueDate" :due_date="loan.dueDate" :return_date="loan.returnDate"
         :status="loan.status" :id="loan.id" :bookId="loan.bookId"/>
    </table>
</div>
</template>

<script setup>
import loan from "./loan.vue";
import { loanStore } from '../store/loan';
import { computed } from "vue";

const store = loanStore()

store.fetchloans();

const loans = computed(() => store.allloans);
</script>

<style>

</style>