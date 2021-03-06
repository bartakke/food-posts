import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material'
import {MatPaginatorModule} from '@angular/material/paginator';
import {  MatInputModule } from '@angular/material';
import { Metrial } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostContainerComponent } from './components/pages/post-container/post-container.component';
import { HeaderComponent } from './components/commonComponents/header/header.component';
import { FooterComponent } from './components/commonComponents/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PostItemComponent } from './components/commonComponents/post-item/post-item.component';
import {ShortNumberPipe} from './components/pipes/short-number.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostContainerComponent,
    FooterComponent,
    PostItemComponent,
    ShortNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Metrial,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


