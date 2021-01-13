import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent implements OnInit {

  testeArray: string[] = [];
  serverName;
  constructor() { }

  ngOnInit() {
  }

  teste(){
    this.testeArray.push("teste");
  }

  print(){
    console.log(this.testeArray);

  }

  onKey(event) {const inputValue = event.target.value;
  console.log(event.target.teste.value);
  }

  OnInput(value) {
    this.serverName = value;
    console.log(this.serverName);

   }
}
