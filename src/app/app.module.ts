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
import { FooterComponent } from './components/commonComponents/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostContainerComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Metrial,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


