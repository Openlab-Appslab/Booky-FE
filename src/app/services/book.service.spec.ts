import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { BookService } from '../services/book.service';



describe('bookService', () => {

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          providers: [HttpClient],
          declarations: [
            AppComponent
          ],
        }).compileComponents();
      });


  it('getBooks should call http get with correct url', () => {
    const httpClient = TestBed.inject(HttpClient);
    const getSpy = spyOn(httpClient, 'get').and.callThrough();

    BookService.getAllBooks();

    expect(getSpy).toHaveBeenCalledWith('/books' as any);
  });


});