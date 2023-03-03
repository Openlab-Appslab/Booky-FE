import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookComponent } from './create-book.component';
import { Book } from 'src/book';

describe('CreateBookComponent', () => {
  let component: CreateBookComponent;
  let fixture: ComponentFixture<CreateBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have a title', () => {
    const book: Book = { id: 1, title: 'My Book', author: 'John Doe', price: 10, description: 'A great book!' };
    component.book = book;
    // expect(component.book).toBeDefined();
    // expect(component.book.author).toBeDefined();
    // expect(component.book.description).toBeDefined();
    // expect(component.book.price).toBeDefined();
    expect(component.book.title).toBeDefined();
  });
});
