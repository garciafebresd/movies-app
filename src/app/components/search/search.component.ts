import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  title: any;
  movies: any[];
  loader: boolean;
  error: boolean;
  messageError: string;

  constructor(public moviesService: MoviesService,
              public activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      if (params.text) {
        this.title = params.text;
        this.findMovie();
      }
    });
  }

  ngOnInit() {
  }

  findMovie() {

    this.error = false;

    if (this.title.length === 0) {
      return;
    }

    this.loader = true;
    this.messageError = '';

    this.moviesService.findMovie(this.title).subscribe((response) => {

      this.movies = response;
      this.loader = false;

    }, responseError => {

      this.messageError = 'Error al buscar el título solicitado';

      this.loader = false;
      this.error = true;
    });
  }
}
