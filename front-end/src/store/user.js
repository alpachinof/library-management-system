import { defineStore } from 'pinia';
import axios from 'axios';

export const userStore = defineStore('user', {
  state: () => {
    return {
      users:[]
    }
  },
  actions: {
    async fetchusers() {
      try {
        const response = await axios.get('http://localhost:8080/api/users');
        this.users = response.data;
      } catch (error) {
        console.log(error);
    }
  },
  async createuser(user) {
    try {
      const response = await axios.post('http://localhost:8080/api/users',{...user});
      swal("Good job!", "عضو با موفقیت اضافه شد", "success");
    } catch (error) {
      swal ( "Oops" ,  "عملیات با خطا مواجه شد" ,  "error" );
      console.log(error);
  }
  },
  },
  getters: {
    allusers: (state) => {
      return state.users;
    }
  },
})