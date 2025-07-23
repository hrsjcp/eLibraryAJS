import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { Books } from './components/books/books';
import { Offers } from './components/offers/offers';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';

export const routes: Routes = [
    
    {
        path: 'books',
        component: Books
    },
    {
        path: 'offers',
        component: Offers
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'signup',
        component: Signup
    },
    {
        path: '',
        component: Main
    }
];
