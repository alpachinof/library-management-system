<script setup>

</script>

<template>
  <div dir="rtl">
    <div class="sidebar fixed top-0 bottom-0 right-[-300px] lg:right-0 duration-1000
    p-2 w-[300px] overflow-y-auto text-center bg-gray-900 shadow h-screen">
    <div class="text-gray-100 text-xl">
      <div class="p-2.5 mt-1 flex items-center rounded-md ">
        <h1 class="text-[18px]  ml-3 text-xl text-gray-200 font-bold">سیستم مدیریت کتابخانه</h1>
      </div>
      <hr class="my-2 text-gray-600">

      <div>

        <router-link to="/">
          <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
            <span class="text-[18px] ml-4 text-gray-200">داشبورد</span>
          </div>
        </router-link>

        <router-link to="/loans">
          <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
            <i class="bi bi-bookmark-fill"></i>
            <span class="text-[18px] ml-4 text-gray-200">میز امانت</span>
          </div>
        </router-link>

        <router-link to="/books">
          <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
            <i class="bi bi-envelope-fill"></i>
            <span class="text-[18px] ml-4 text-gray-200">اسناد</span>
          </div>
        </router-link>


        <router-link to="/users">
          <div class="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
            <i class="bi bi-chat-left-text-fill"></i>
            <div class="flex justify-between w-full items-center" onclick="dropDown()">
              <span class="text-[18px] ml-4 text-gray-200">اعضاء کتابخانه</span>
              <span class="text-sm rotate-180" id="arrow">
                <i class="bi bi-chevron-down"></i>
              </span>
            </div>
          </div>
        </router-link>

      </div>
    </div>
  </div>
  </div>
</template>

<style>

</style>
