import { Component, OnInit } from '@angular/core';
import { Book } from 'src/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-rent-page',
  templateUrl: './rent-page.component.html',
  styleUrls: ['./rent-page.component.css']
})
export class RentPageComponent implements OnInit {

  constructor(
    private bookService: BookService,
  ) { }

  books: Book[];
  selectedBook: Book;

  ngOnInit(): void {

    this.bookService.getAllBooks().subscribe(response=> {
      this.books=response;
      console.log(response);
      //this.loaded = false;
    });
  }



}
