import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { Books } from './components/books/books';
import { Offers } from './components/offers/offers';

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
        path: '',
        component: Main
    }
];
