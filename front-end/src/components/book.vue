<template>
    <tr class="h-16">
        <td>{{title}}</td>
        <td>{{isbn}}</td>
        <td>{{author}}</td>
        <td>
            <span :class="[available == 'موجود' ? 'p-1 text-green-800 bg-green-200 rounded-lg' : 'p-1 text-red-800 bg-red-200 rounded-lg']">
                {{available}}
            </span>
        </td>
    </tr>

</template>


<script setup>
const props = defineProps(['title','isbn','available','author'])

</script>

<style scoped>

</style>