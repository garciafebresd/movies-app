import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(public moviesService: MoviesService) {
    this.moviesService.getCartelera()
      .subscribe((response) => {
        console.log(response);
      });
  }

  ngOnInit() {
  }

}
