import { Component } from '@angular/core';
import { Digilib } from '../../services/digilib';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
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
