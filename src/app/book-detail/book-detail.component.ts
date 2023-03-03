import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private bookService: BookService, private route: ActivatedRoute) { }
  id: number;
  selectedBook: Book;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBookById(this.id)
    .subscribe(book => {
      this.selectedBook = book;
      console.log(book);
    })
  }

}
