import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../services/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-specific-book',
  imports: [CommonModule],
  templateUrl: './specific-book.html',
  styleUrl: './specific-book.scss'
})
export class SpecificBook implements OnInit {

  bookId: string | null;
  bookDetails: [];

  constructor(private bookService: Book, private route: ActivatedRoute) {
    this.bookId = this.route.snapshot.paramMap.get("bookId");
    this.bookDetails = [];
  }

  ngOnInit() {
    if (this.bookId) {
      this.getBookDetails();
    } else {
      console.error('No book ID found in route parameters');
    }
  }

  getBookDetails() {
    if (this.bookId) {
      this.bookService.getBookById(this.bookId).subscribe({
        next: (data) => {
          this.bookDetails = data.data;
        },
        error: (err) => {
          console.error('Error fetching book details:', err);
        },
        complete: () => {
          console.log('Book details loaded successfully');
        }
      });
    } else {
      console.error('No book ID available to fetch details');
    }
  }

}
