import { Component } from '@angular/core';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css']
})
export class CardNewsComponent {
  nome: string = 'João';
	idade: number[] = [1, 2]
	objeto = {
		brinquedo: 'bola'
	}
}
