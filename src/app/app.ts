import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Digilib } from './services/digilib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('eLibraryAJS');
  digilibService = inject(Digilib);

  isUserLoggedIn = () => this.digilibService.isUserLoggedIn();

  LogOut() {
    this.digilibService.logOut();
    window.location.reload();
  }
}
