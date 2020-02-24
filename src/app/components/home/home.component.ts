import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  billboard: any;
  mostPopular: any;
  mostPopularKids: any;

  constructor(public moviesService: MoviesService) {
    this.moviesService.getCartelera()
      .subscribe(response => this.billboard = response);

    this.moviesService.getMostPolupar()
      .subscribe(response => this.mostPopular = response);

    this.moviesService.getMostPopularKids()
      .subscribe(response => this.mostPopularKids = response);

  }

  ngOnInit() {
  }

}
