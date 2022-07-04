import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';
import { FiltersComponent } from './components/bookstore-app/filters/filters.component';
import { ProductListComponent } from './components/bookstore-app/product-list/product-list.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ProductItemComponent } from './components/bookstore-app/product-list/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from './components/bookstore-app/product-list/product-list.component.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BookstoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    NavComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
function AppRoutingModule(AppRoutingModule: any): void {
  throw new Error('Function not implemented.');
}

