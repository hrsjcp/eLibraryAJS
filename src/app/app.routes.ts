import { Routes } from '@angular/router';
import { Main } from './components/main/main';
import { Books } from './pages/books/books';
import { Offers } from './pages/offers/offers';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { NotFound } from './components/not-found/not-found';
import { Home } from './pages/home/home';
import { accessGuard } from './guards/access-guard';

export const routes: Routes = [
    { path: "digilib", component: Home, pathMatch: "full", canActivate: [accessGuard] },
    { path: "signup", component: Signup, pathMatch: "full" },
    { path: "login", component: Login, pathMatch: "full" },
    { path: "", component: Main, pathMatch: "full" },
    { path: "**", component: NotFound }
];
