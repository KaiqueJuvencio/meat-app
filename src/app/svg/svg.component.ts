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
  enabled = true;
  remocao = false;
  constructor() { }

  ngOnInit() {
  }

  teste(){
    this.estadosArray.push("teste");
  }

  OnInput(value) {
    this.remocao = false;
    this.estadoValor = value;
    for(var i = 0; i < this.estadosArray.length; i++){
      if(this.estadosArray[i] == value){
        this.estadosArray.splice(i, 1);
        this.remocao = true;
      }
    }

    if(this.estadosArray[this.ultimaPosicao] == value){
      console.log("Não pode inserir");
    }
    if(!this.remocao){
      this.estadosArray.push(this.estadoValor);
    }
    this.ultimaPosicao = this.estadosArray.length-1;
    console.log(this.estadosArray);
   }
}
