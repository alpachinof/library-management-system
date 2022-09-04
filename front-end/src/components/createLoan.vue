<template>
<div dir="rtl" class="mr-80">
<form class="w-full max-w-sm">
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        کتاب
      </label>
    </div>
    <div class="md:w-2/3">
      <select v-model="obj.bookId" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
        <option v-for="book in books" :key="book.id" :value="book.id">{{book.title + ' ' +  book.author}}</option>
      </select>
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        عضو
      </label>
    </div>
    <div class="md:w-2/3">
      <select v-model="obj.userId" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
        <option v-for="user in users" :key="user.id" :value="user.id">{{user.firstName + ' ' + user.lastName}}</option>
      </select>
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        تاریخ تحویل
      </label>
    </div>
    <div class="md:w-2/3">
      <input v-model="obj.dueDate" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="date">
    </div>
  </div>
  
  


  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-1/3">
      <button @click="mutateDeeply()" class="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        ذخیره
      </button>
    </div>
  </div>
</form>

</div>
</template>

<script setup>
import { reactive , computed } from 'vue';
import { userStore } from '../store/user';
import { bookStore } from '../store/book';
import { loanStore } from '../store/loan';
import moment from 'moment';

const obj = reactive({
  bookId: '',
  userId:'',
  dueDate:'',
  issueDate:moment(),
})

const bookstore = bookStore();
const userstore = userStore();
const loanstore = loanStore();

userstore.fetchusers();
bookstore.fetchbooks();

const users = computed(() => userstore.allusers);
const books = computed(() => bookstore.availablebooks);



function mutateDeeply() {
  loanstore.createloan(obj);
}

</script>


<style>

</style>