import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(movie: any, poster: boolean = false): string {

    let url = 'http://image.tmdb.org/t/p/w500';

    if(poster){
      return `${url}${movie['poster_path']}`;
    }

    if (movie['backdrop_path']) {
      return `${url}${movie['backdrop_path']}`;
    }

    if (movie['poster_path']) {
      return `${url}${movie['poster_path']}`;
    }

    return 'assets/images/noimage.jpg';
  }

}
