import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Digilib } from '../../../services/digilib';

@Component({
  selector: 'app-project-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './project-navbar.html',
  styleUrl: './project-navbar.scss'
})
export class ProjectNavbar {

  constructor(private digilibService: Digilib) {}
  
  isUserLoggedIn = () => this.digilibService.isUserLoggedIn();

  LogOut() {
    this.digilibService.logOut();
    window.location.reload();
  }

}
