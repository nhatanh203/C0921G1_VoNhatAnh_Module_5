import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public num1: number;
  public num2: number;
  public num3: number;

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    console.log(this.num1);
    console.log(this.num2);
    console.log(this.num3);
    this.num3 = this.num1 + this.num2;
  }

  sub(){
    this.num3 = this.num1 - this.num2;
  }

  mul(){
    this.num3 = this.num1 * this.num2;
  }

  div(){
    this.num3 = this.num1 / this.num2;
  }

}
