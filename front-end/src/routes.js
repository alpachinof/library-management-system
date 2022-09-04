import { createRouter, createWebHistory } from 'vue-router';
import app from './components/HelloWorld.vue';
import books from './components/books.vue';
import loans from './components/loans.vue';
import users from './components/users.vue';
import createBooks from './components/createBook.vue';
import createLoans from './components/createLoan.vue';
import createUsers from './components/createUser.vue';


const routes = [
    { path: '/', component: app },
    { path: '/books', component: books },
    { path: '/loans', component: loans },
    { path: '/users', component: users },
    { path: '/books/create', component: createBooks },
    { path: '/loans/create', component: createLoans },
    { path: '/users/create', component: createUsers },
  ]



  const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
  

export default router;