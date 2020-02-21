import { Injectable } from '@angular/core';
import { HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; // Map

@Injectable()
export class MoviesService {

  private apikey: string = "USA TU API KEY AQUI!!!!";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient) { }

  getPopulares() {

    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => res.json());
  }

  buscarPelicula(texto: string) {

    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => res.json());
  }

}
