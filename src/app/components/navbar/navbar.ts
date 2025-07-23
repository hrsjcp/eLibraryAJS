import { Component, inject } from '@angular/core';
import { Digilib } from '../../services/digilib';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PAGE_URLS } from '../../structure/prototype';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  PAGE_URLS = PAGE_URLS;

  constructor(private digilibService: Digilib) {}

  isUserLoggedIn = () => this.digilibService.isUserLoggedIn();

  LogOut() {
    this.digilibService.logOut();
    window.location.reload();
  }

}
