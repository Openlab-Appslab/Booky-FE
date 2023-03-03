import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Book } from 'src/book';
import { BookHistory } from '../bookHistory';
import { BookHistoryService } from '../services/bookHistory.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  bookHistoryes: BookHistory[];

  constructor(
    private cookies : CookieService,
    private bookHistoryService: BookHistoryService,
  ) { }

  loggedInUsername: string;

  ngOnInit(): void {
    this.loggedInUsername = this.cookies.get('username');
    this.getAllBooks();
  }

  getAllBooks(){
    this.bookHistoryService.getBookHistoryCurrentUser()
    .subscribe(books => {
      this.bookHistoryes = books;
      console.log(books);
    });
  }

  returnBook(bookId: number){
    this.bookHistoryService.returnBook(bookId).subscribe( (result) => {
        console.log("returned"+ result);
    });
  }

}
