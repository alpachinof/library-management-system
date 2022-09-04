<template>
    <tr class="h-16">
        <td>{{name}}</td>
        <td>{{id}}</td>
        <td>{{created}}</td>
        <td>{{address}}</td>
    </tr>

</template>


<script setup>
const props = defineProps(['name','id','created','address'])

</script>

<style>

</style>