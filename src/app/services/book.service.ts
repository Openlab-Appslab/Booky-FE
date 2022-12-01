import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { allBooks } from 'src/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  static getAllBooks() {
      throw new Error('Method not implemented.');
  }

  constructor(
    private readonly http: HttpClient,
    private cookies: CookieService,
  ) { }

  getAllBooks():Observable <allBooks[]>  {
    return this.http.get<any[]>('http://localhost:8080/books')  //posielat quiz bez question listu iba detaily... od palina 
  }

}