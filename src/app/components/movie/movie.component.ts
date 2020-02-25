import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent {

  movie: any;
  loader: boolean;
  backTo = '';
  search = '';

  constructor(public moviesService: MoviesService,
    public activatedRoute: ActivatedRoute) {


    this.loader = true;
    this.activatedRoute.params.subscribe((params) => {

      if (params.search) {
        this.search = params.search;
      }

      this.backTo = params.page;
      const movieId = params.id;
      this.moviesService.getMovie(movieId)
        .subscribe((movieResp) => {
          this.movie = movieResp;
          this.loader = false;
        });

    });
  }

}
