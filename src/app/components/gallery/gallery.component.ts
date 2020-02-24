import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styles: []
})
export class GalleryComponent implements OnInit {

  @Input() title;
  @Input() movies;

  constructor() { }

  ngOnInit() {
  }

}
