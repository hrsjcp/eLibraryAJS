import { Component } from '@angular/core';
import { Digilib } from '../../../services/digilib';
import { CommonModule } from '@angular/common';
import { ProjectNavbar } from "../project-navbar/project-navbar";
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, CommonModule, ProjectNavbar, Sidebar],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  constructor(private digilibService: Digilib) {}

  LogOut() {
    this.digilibService.logOut();
    window.location.reload();
  }

}
