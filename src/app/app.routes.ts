import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { Books } from './pages/books/books';
import { Offers } from './pages/offers/offers';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { NotFound } from './components/not-found/not-found';
import { Home } from './pages/project_pages/home/home';
import { accessGuard } from './guards/access-guard';
import { Tests } from './pages/tests/tests';
import { MyOrders } from './pages/my-orders/my-orders';
import { GenerateReport } from './pages/generate-report/generate-report';
import { SpecificBook } from './pages/specific-book/specific-book';
import path from 'path';

export const routes: Routes = [
    { path: "digilib", component: Home, canActivate: [accessGuard], children: [
        { path: "books", component: Books, pathMatch: "full" },
        { path: "tests", component: Tests, pathMatch: "full" },
        { path: "offers", component: Offers, pathMatch: "full" },
        { path: "my-order", component: MyOrders, pathMatch: "full" },
        { path: "generate-report", component: GenerateReport, pathMatch: "full" },
        { path: "book-detail/:bookId", component: SpecificBook, pathMatch: "full" }
    ]},
    { path: "signup", component: Signup, pathMatch: "full" },
    { path: "login", component: Login, pathMatch: "full" },
    { path: "", component: Main, pathMatch: "full" },
    { path: "**", component: NotFound }
];
