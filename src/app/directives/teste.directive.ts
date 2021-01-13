import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[mudaCor]'
})
export class TesteDirective {

  constructor() { }
  fill: string;
  strokeWidth;
  contador = 0;

  @HostBinding("style.fill") get setFill(){
    return this.fill;
  }

  @HostBinding("style.strokeWidth") get setStrokeWidth(){
    return this.strokeWidth;
  }

  @HostListener('click')
  mudaCor(){
    if((this.contador % 2) == 1){
      this.fill = '#000000';
      this.strokeWidth = '76';
    }else{
      this.fill = '#ff7f00';
      this.strokeWidth = '0.15%';
    }
    this.contador +=1;
  }

  // @HostListener('mouseenter')
  // mudaCorEnter(){
  //   console.log(this.contador);

  //   this.fill = '#ff7f00';
  // }

  // @HostListener('mouseout')
  // mudaCorOut(){
  //   this.fill = 'black';
  // }
}
