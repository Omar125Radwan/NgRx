import { Book } from './store/book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  bookApi = "http://localhost:3000/books";
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Book[]>(this.bookApi);
  }

  create(payload: Book) {
    return this.http.post<Book>(this.bookApi, payload);
  }

  update(payload: Book) {
    return this.http.put<Book>(`${this.bookApi}/${payload.id}`, payload);
  }

  delete(id: number) {
    return this.http.delete(`${this.bookApi}/${id}`);
  }

}
