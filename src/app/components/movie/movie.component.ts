import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent {

  title: any;
  movie: any;
  loader: boolean;

  constructor(public moviesService: MoviesService,
              public activatedRoute: ActivatedRoute) {


    this.loader = true;
    this.activatedRoute.params.subscribe((params) => {

      console.log(params);
      const movieId = params.id;
      this.moviesService.getMovie(movieId)
        .subscribe((movieResp) => {
          this.movie = movieResp;
          this.loader = false;
        });

    });
  }

}
