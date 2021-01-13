import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent implements OnInit {

  estadosArray: string[] = [];
  estadoValor;
  ultimaPosicao;
  constructor() { }

  ngOnInit() {
  }

  teste(){
    this.estadosArray.push("teste");
  }

  OnInput(value) {
    this.estadoValor = value;
    if(this.estadosArray[this.ultimaPosicao] == value){
      console.log("Não pode inserir");
    }else{
      this.estadosArray.push(this.estadoValor);
    }
    this.ultimaPosicao = this.estadosArray.length-1;
    console.log(this.estadosArray);
   }
}
