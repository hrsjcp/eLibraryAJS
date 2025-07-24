import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Book {

  constructor(private http: HttpClient) {}

  public getBooks(): Observable<any> {
    return this.http.get<any>('http://localhost:1234/api/books/all');
  }

  public getBookById(bookId: string): Observable<any> {
    return this.http.get<any>(`http://localhost:1234/api/books/get-book-by-id/${bookId}`);
  }
  
}
