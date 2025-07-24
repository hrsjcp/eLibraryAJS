import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterModule, Navbar],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {

}
