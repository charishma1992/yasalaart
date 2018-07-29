import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule} from '@angular/forms';
import {ImageZoomModule} from 'angular2-image-zoom';
//import {SlideshowModule} from 'ng-simple-slideshow';
import { SidebarModule } from 'ng-sidebar';

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { TextboxComponent } from './textbox/textbox.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientService } from './providers/http.provider';
import { ProductdescriptionComponent } from './productdescription/productdescription.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';

import { ExhibitionComponent } from './exhibition/exhibition.component';
import { NewsComponent } from './news/news.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    ExhibitionComponent,
    NewsComponent,
    RegisterComponent,
    TopnavComponent,
    TextboxComponent,
    ProductsComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ProductdescriptionComponent,
    ContactusComponent,
    CartComponent,
    DropdownComponent,
    AboutusComponent
 
  ],
  imports: [
    CommonModule, ImageZoomModule,
    SidebarModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },
      { path: 'productdescription', component: ProductdescriptionComponent },
      { path: 'cart', component: CartComponent },
      { path: 'textbox', component: TextboxComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'news', component: NewsComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'contactus', component: ContactusComponent },
      { path: 'exhibition', component: ExhibitionComponent },
      {path:'',component:HomeComponent}
    ]),
    
  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
