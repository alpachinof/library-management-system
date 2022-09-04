<template>
<div dir="rtl" class="mr-80">
    <table>
        <th class="px-16">عنوان</th>
        <th class="px-16">شابک</th>
        <th class="px-16">نویسنده</th>
        <th class="px-16">وضعیت</th>
        <router-link to="/books/create">
        <button class="border-2 border-sky-500 p-2 rounded">کتاب جدید</button>
        </router-link>
        <book v-for="book in books" :key="book.id" :title="book.title" :isbn="book.isbn"
         :available="book.status" :author="book.author"/>
    </table>
</div>
</template>

<script setup>
import book from "./book.vue";
import { bookStore } from '../store/book'
import { computed } from "vue";

const store = bookStore()

store.fetchbooks();

const books = computed(() => store.allbooks);


</script>

<style>

</style>