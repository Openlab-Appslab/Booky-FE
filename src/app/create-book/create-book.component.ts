import { Component, OnInit } from '@angular/core';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { book } from 'src/book';
import { BookService } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book: book;
  title: string;
  author: string;
  description: string;
  price: number;
  id: number;

  constructor(private bookService: BookService, private route: ActivatedRoute,) { }


  addBook() {
    //this.book.author = 
    const book = {
      title: this.title,
      author: this.author,
      description: this.description,
      price: this.price
    }

    this.bookService.addBook(book)
    .subscribe(res => {
      window.alert('Book: ' + this.title + ' saved successfully!');
      window.location.reload();
    });
  }

  ngOnInit(): void {
    this.id =Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBookById(this.id)
    .subscribe(book => {
      
    })
  }
}
