import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {

  @Input() items: any[] = [];
  @Input() search: string;

  constructor(private router: Router) { }

}
