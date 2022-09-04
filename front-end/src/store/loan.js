import { defineStore } from 'pinia';
import axios from 'axios';

export const loanStore = defineStore('loan', {
  state: () => {
    return {
      loans:[]
    }
  },
  actions: {
    async  fetchloans() {
      try {
        const response = await axios.get('http://localhost:8080/api/loans');
        this.loans = response.data;
      } catch (error) {
        console.log(error);
    }
  },
  async createloan(loan) {
    try {
      const response = await axios.post('http://localhost:8080/api/loans',{...loan});
      swal("Good job!", "امانت با موفقیت اضافه شد", "success");
    } catch (error) {
      swal ( "Oops" ,  "عملیات با خطا مواجه شد" ,  "error" );
      console.log(error);
  }
  },
  async updateloan(loan){
    try {
      const response = await axios.put('http://localhost:8080/api/loans',{...loan});
      swal("Good job!", "تاریخ تحویل ثبت شد", "success");
    } catch (error) {
      swal ( "Oops" ,  "عملیات با خطا مواجه شد" ,  "error" );
      console.log(error);
  }
  }
  },
  getters: {
    allloans: (state) => {
      return state.loans;
    }
  },
})