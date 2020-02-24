import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor(private router: Router) { }

  findMovieNV(title: string) {

    if (title.length === 0) {
      return;
    }

    this.router.navigate(['/search', title]);

  }

}
