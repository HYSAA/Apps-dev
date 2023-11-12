import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  currentNumber = '0';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;




  public getNumber(v: string) {
    console.log(v);
    if (this.waitForSecondNumber) {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0' ? this.currentNumber = v : this.currentNumber += v;
    }
  }



  getDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }


  private doCalculation(op, secondOp) {
    switch (op) {
      case '+':
        return this.firstOperand += secondOp;
      case '-':
        return this.firstOperand -= secondOp;
      case '*':
        return this.firstOperand *= secondOp;
      case '/':
        return this.firstOperand /= secondOp;
      case '=':
        return secondOp;
    }
  }


  public getOperation(op: string) {
    console.log(op);
    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    } else if (this.operator) {
      const result = this.doCalculation(this.operator, Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;
    console.log(this.firstOperand);
  }
  public clear() {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

  @HostListener('document:keydown', ['$event'])
  onKeyPress(event: KeyboardEvent) {

    if (event.key === '0' ||event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4' || event.key === '5' || event.key === '6' || event.key === '7' || event.key === '8' || event.key === '9') {
      this.getNumber(event.key)

    }
    if (event.key === '+' || event.key === '-' || event.key === '/' || event.key === '*' || event.key === '=' || event.key === 'Enter') {

      let newKey = event.key;

      if (event.key === 'Enter') {
        newKey = '=';
      }
      this.getOperation(newKey)
    }

    if (event.key === '.') {
      this.getDecimal()
    }

    if (event.key === 'Delete') {
      this.clear()
    }
  }
}