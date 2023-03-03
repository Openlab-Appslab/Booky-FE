import { Component, OnInit } from '@angular/core';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { Book } from 'src/book';
import { BookService } from '../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book: Book;
  title: string;
  author: string;
  description: string;
  price: number;
  id: number;
  userRole: any;
  authService: AuthService;

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
    //set role from httpheaders
    console.log(this.authService.getRole());
    this.userRole = this.authService.getRole();
    
    if (this.userRole == 'ADMIN') {
      this.id =Number(this.route.snapshot.paramMap.get('id'));
      this.bookService.getBookById(this.id)
      .subscribe(book => {
      
      })
    }
  }
}
