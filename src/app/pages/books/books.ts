import { Component, inject, NgModule, OnInit } from '@angular/core';
import { Book } from '../../services/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  imports: [CommonModule],
  templateUrl: './books.html',
  styleUrl: './books.scss'
})
export class Books implements OnInit {

  books: any[] = [];
  
  constructor(private bookService: Book) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data.data || [];
    }, error => {
      console.error('Error fetching books:', error);
    });
  }

}
