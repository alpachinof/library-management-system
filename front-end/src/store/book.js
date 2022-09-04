import { defineStore } from 'pinia';
import axios from 'axios';
import swal from 'sweetalert';

export const bookStore = defineStore('book', {
  state: () => {
    return {
      books:[]
    }
  },
  actions: {
    async  fetchbooks() {
      try {
        const response = await axios.get('http://localhost:8080/api/books');
        this.books = response.data;
        console.log(this.books);
      } catch (error) {
        console.log(error);
    }
  },
  async postbooks(book) {
    try {
      const response = await axios.post('http://localhost:8080/api/books',{...book});
      swal("Good job!", "کتاب با موفقیت اضافه شد", "success");
    } catch (error) {
      swal ( "Oops" ,  "عملیات با خطا مواجه شد" ,  "error" );
      console.log(error);
  }
  }
  },
  getters: {
    allbooks: (state) => {
      return state.books;
    },
    availablebooks: (state) => {
      return state.books.filter(el => el.status === 'موجود');
    }
  },
})