import { Component, inject } from '@angular/core';
import { Digilib } from '../../services/digilib';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  digilibService = inject(Digilib);

  isUserLoggedIn = () => this.digilibService.isUserLoggedIn();

  LogOut() {
    this.digilibService.logOut();
    window.location.reload();
  }

}
