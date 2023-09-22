import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-component',
  templateUrl: './attribute-component.component.html',
  styleUrls: ['./attribute-component.component.css']
})
export class AttributeComponentComponent {
  item:string = '';
  valor:number = 0;
  items:string[] = [];
  isEnableBlock:boolean = false;
  tipo:string = 'mostrar';
  color: string = 'red';
  buttonStyle: string = 'btn-primary';
  cardTemplate: string = 'card-template';

  constructor(){}

  adicionarItem(){
    this.items.push(`${this.item}`);
    this.item = '';
  }

  enableBlock(){
    this.isEnableBlock = !this.isEnableBlock;
  }

  switchType(){
    this.tipo = this.tipo === 'mostrar' ? 'esconder' : 'mostrar';
    this.buttonStyle = this.buttonStyle === 'btn-primary' ? 'btn-secondary' : 'btn-primary';
  }
}
