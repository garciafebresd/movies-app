import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; // Map

@Injectable()
export class MoviesService {

  private apikey: string = "3885e1138d563b43edcf562d4a163671";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient) { }

  getCartelera() {

    const dateFrom = new Date();
    dateFrom.setDate(dateFrom.getDate() - 7);
    const dateTo = new Date();

    const dateFromFormat = this.dateFormatter(dateFrom);
    const dateToFormat = this.dateFormatter(dateTo);

    // tslint:disable-next-line: max-line-length
    const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${dateFromFormat}&primary_release_date.lte=${dateToFormat}&api_key=${this.apikey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  getPopulares() {

    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  buscarPelicula(texto: string) {

    const url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }

  dateFormatter(dateObject) {
    let month = dateObject.getMonth() + 1;
    let day = dateObject.getDate();
    let year = dateObject.getFullYear();

    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }

}
