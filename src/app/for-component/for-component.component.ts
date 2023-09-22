import { Component } from '@angular/core';

@Component({
  selector: 'app-for-component',
  templateUrl: './for-component.component.html',
  styleUrls: ['./for-component.component.css']
})
export class ForComponentComponent {
  produtos:string[] = []
  menuType:string = 'A'

  constructor(){
    this.produtos = ['mouse', 'teclado', 'monitor', 'cabo hdmi', 'cadeira']
  }

  adicionar(){
    this.produtos.push('novo produto')
  }

  remover(index:number){
    this.produtos.splice(index, 1)
  }


}
