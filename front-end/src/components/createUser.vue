<template>
<div dir="rtl" class="mr-80">
<form class="w-full max-w-sm">
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        نام
      </label>
    </div>
    <div class="md:w-2/3">
      <input v-model="obj.firstName" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text">
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        نام خانوادگی
      </label>
    </div>
    <div class="md:w-2/3">
      <input v-model="obj.lastName" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text">
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        کد ملی
      </label>
    </div>
    <div class="md:w-2/3">
      <input v-model="obj.memberId" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text">
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        آدرس
      </label>
    </div>
    <div class="md:w-2/3">
      <input v-model="obj.address" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text">
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        شماره همراه
      </label>
    </div>
    <div class="md:w-2/3">
      <input v-model="obj.phoneNumber" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="number">
    </div>
  </div>

  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        تاریخ اتمام عضویت
      </label>
    </div>
    <div class="md:w-2/3">
      <input v-model="obj.expireDate" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="date">
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
import { reactive } from 'vue';
import { userStore } from '../store/user';
import moment from 'moment';

const obj = reactive({
  firstName: '',
  lastName:'',
  memberId:'',
  address:'',
  phoneNumber:'',
  joinDate:moment(),
  expireDate:'',
})

const store = userStore()

function mutateDeeply() {
  store.createuser(obj);
}

</script>


<style>

</style>