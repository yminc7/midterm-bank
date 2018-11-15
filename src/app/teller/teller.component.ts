import { Component } from '@angular/core';
import { BankService } from '../bank.service'


@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
export class TellerComponent {
  
  name;
  age;
  address;
  withdrawAmount: number;
  depositAmount: number;
  clickedTransaction = false
  transactions;
  balance:number;
 
  customerWithdraw() {
   this._atm.withdraw(this.withdrawAmount)
   this.balance = this._atm.account.balance
   this.clickedTransaction = false
  }
   
  customerDeposit() {
    this._atm.deposit(this.depositAmount)
    this.balance = this._atm.account.balance
    this.clickedTransaction = false
  }
  
  viewTransactions() {
    this.clickedTransaction = true
  }
  

  
  constructor(private _atm: BankService) {    
    this.name = `${this._atm.account.lname}, ${this._atm.account.fname}`
    this.balance = this._atm.account.balance
    this.age = this._atm.account.age
    this.address = this._atm.account.address
    this.transactions = this._atm.account.transactions
 }

}
