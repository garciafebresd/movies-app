import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MoviesService } from './services/movies.service';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { SearchComponent } from './components/search/search.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { NoimagePipe } from './pipes/noimage.pipe';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { CardComponent } from './components/shared/card/card.component';


@NgModule({
  declarations: [
    //COMPONENTS
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MovieComponent,
    SearchComponent,
    LoaderComponent,
    ErrorComponent,
    CardComponent,
    //PIPES
    DomseguroPipe,
    NoimagePipe,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
