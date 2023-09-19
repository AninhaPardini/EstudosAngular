import { Component } from '@angular/core';


@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})


export class TwowayComponent {
  placeholder: string = 'email';
  placepass: string = 'password';
  color: string = 'red';
}
