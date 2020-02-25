import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; // Map

@Injectable()
export class MoviesService {

  private apikey = '3885e1138d563b43edcf562d4a163671';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  movies: any[];

  constructor(private http: HttpClient) { }

  getMovie(movieId) {

    const url = `${this.urlMoviedb}/movie/${movieId}?api_key=${this.apikey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }


  getCartelera() {

    const dateFrom = new Date();
    dateFrom.setDate(dateFrom.getDate() - 7);
    const dateTo = new Date();

    const dateFromFormat = this.dateFormatter(dateFrom);
    const dateToFormat = this.dateFormatter(dateTo);

    // tslint:disable-next-line: max-line-length
    const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${dateFromFormat}&primary_release_date.lte=${dateToFormat}&api_key=${this.apikey}&language=es`;
    return this.http.jsonp(url, 'callback').pipe(
      map((response: any) => response.results)
    );
  }

  getMostPolupar() {
    const query = '/discover/movie?sort_by=popularity.desc';
    return this.requestMostPopular(query);
  }

  getMostPopularKids() {
    const query = '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
    return this.requestMostPopular(query);
  }

  requestMostPopular(query: string) {
    const url = `${this.urlMoviedb}${query}&api_key=${this.apikey}&language=es`;
    return this.http.jsonp(url, 'callback').pipe(
      map((response: any) => response.results)
    );
  }

  findMovie(texto: string) {

    const url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.jsonp(url, 'callback').pipe(
      map((response: any) => {
        this.movies = response.results;
        return response.results;
      })
    );
  }

  dateFormatter(dateObject) {
    let month = dateObject.getMonth() + 1;
    let day = dateObject.getDate();
    const year = dateObject.getFullYear();

    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }

}
