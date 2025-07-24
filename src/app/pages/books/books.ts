import { Component, inject, NgModule, OnInit } from '@angular/core';
import { Book } from '../../services/book';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-books',
  imports: [CommonModule, RouterModule],
  templateUrl: './books.html',
  styleUrl: './books.scss'
})
export class Books implements OnInit {

  books: any[] = [];
  
  constructor(private bookService: Book, private router: Router) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe({
      next: (data) => {
        this.books = data.data;
      },
      error: (err) => {
        console.error('Error fetching books:', err); 
        alert('Failed to load books. Please try again later.');
      },
      complete: () => {
        console.log('Books loaded successfully');
      }
    });
  }

  openBookDetail(bookId: number) {
    this.router.navigate(['/digilib/book-detail/'+bookId]);
  }

}
