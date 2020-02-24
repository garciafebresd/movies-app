import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MoviesService } from './services/movies.service';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { SearchComponent } from './components/search/search.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { NoimagePipe } from './pipes/noimage.pipe';


@NgModule({
  declarations: [
    //COMPONENTS
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MovieComponent,
    SearchComponent,
    //PIPES
    DomseguroPipe,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    HttpClientModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
