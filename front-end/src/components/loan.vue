<template>
    <tr class="h-16">
        <td>{{book}}</td>
        <td>{{member}}</td>
        <td>{{issue_date}}</td>
        <td>{{due_date}}</td>
        <td>{{return_date}}</td>
        <td>
            <span :class="stylebind">
                {{status}}
            </span>
        </td>
        <td>
         <button @click="saveReturnDate()" :disabled="return_date" class="w-[100px] shadow bg-green-400 hover:bg-green-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        ثبت تحویل
        </button>
        </td>
    </tr>
    <!-- class="w-[100px] shadow bg-green-400 hover:bg-green-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" -->
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { reactive } from 'vue';
import { loanStore } from '../store/loan';
import moment from 'moment';
// import book from '../../../back-end/app/models/book';
const props = defineProps(['id','bookId','book','member','issue_date','due_date','return_date','status']);

const loanstore = loanStore();

const status = computed(()=>{
    if (props.return_date){
    return "تحویل شده";
    }
    if (moment().isAfter(moment(props.due_date))
    ) {
    return 'تاخیر';
    }
    return 'در جریان';
});

const stylebind = computed(()=>{
    if(status.value == "تاخیر"){
        return "p-1 text-red-800 bg-red-200 rounded-lg";
    }
    if(status.value == 'در جریان'){
        return "p-1 text-yellow-800 bg-yellow-200 rounded-lg"
    }
    if(status.value == 'تحویل شده'){
    return "p-1 text-green-800 bg-green-200 rounded-lg";
    }
});

const obj = reactive({
    id: props.id,
    bookId: props.bookId,
    returnDate: moment(),
})

async function saveReturnDate(){
    await loanstore.updateloan(obj);
    loanstore.fetchloans();
};

</script>

<style>

</style>