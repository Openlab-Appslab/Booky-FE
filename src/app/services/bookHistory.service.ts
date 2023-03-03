import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
  })

  export class BookHistoryService{

    constructor(
        private http: HttpClient, private cookies: CookieService
    ) { }

    localhost = 'http://localhost:8080';
    authString = `${this.cookies.get('username')}:${this.cookies.get('password')}`

    headerHttp = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(this.authString)
    });

    getBookHistoryCurrentUser(): Observable<any>{
        return this.http.get(this.localhost + '/history', {headers: this.headerHttp});
    }

    lendBook(bookId): Observable<any>{
        return this.http.post(this.localhost + '/lend/' + bookId, null, {headers: this.headerHttp})
    }
  }