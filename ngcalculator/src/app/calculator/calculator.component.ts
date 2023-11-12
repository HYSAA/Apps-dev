import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  currentNumber = '0';
  firstOperand: number | null = null;
  operator: string | null = null;
  waitForSecondNumber = false;

  ngOnInit() {}

  getNumber(value: string): void {
    console.log(value);
    if (this.waitForSecondNumber) {
      this.currentNumber = value;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0' ? this.currentNumber = value : this.currentNumber += value;
    }
  }

  getDecimal(): void {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  private doCalculation(op: string, secondOp: number): number {
    switch (op) {
      case '+':
        return this.firstOperand! += secondOp;
      case '-':
        return this.firstOperand! -= secondOp;
      case '*':
        return this.firstOperand! *= secondOp;
      case '/':
        return this.firstOperand! /= secondOp;
      case '=':
        return secondOp;
      default:
        return 0;
    }
  }

  getOperation(op: string): void {
    console.log(op);
    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    } else if (this.operator) {
      const result = this.doCalculation(this.operator, Number(this.currentNumber));
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;
    console.log(this.firstOperand);
  }

  clear(): void {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

  @HostListener('document:keydown', ['$event'])
  onKeyPress(event: KeyboardEvent): void {
    const key = event.key;

    if ('0123456789'.includes(key)) {
      this.getNumber(key);
    }

    if ('+-/*=Enter'.includes(key)) {
      const newKey = key === 'Enter' ? '=' : key;
      this.getOperation(newKey);
    }

    if (key === '.') {
      this.getDecimal();
    }

    if (key === 'Delete') {
      this.clear();
    }
  }
}
