import { Component } from '@angular/core';
import { BankService } from '../bank.service'

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {
  name;
  amountWithdrawal;
  amountDeposit;
  didWithdraw = false
  didDeposit = false
  balance;
  didTransaction = false
  didBalance = false
  transactions;
  
  
  onWithdraw(){
    this._atm.withdraw(this.amountWithdrawal)
    this.balance = this._atm.account.balance
    this.didWithdraw = true
    this.didDeposit = false
    this.didTransaction = false
    this.didBalance = false
    
  
  }
  
  onDeposit(){
    this._atm.deposit(this.amountDeposit)
    this.balance = this._atm.account.balance
    this.didDeposit = true
    this.didWithdraw = false
    this.didTransaction = false
    this.didBalance = false
  }
  
  
  onBalance(){
    this.balance = this._atm.account.balance
    this.didBalance = true
    this.didWithdraw = false
    this.didDeposit = false
    this.didTransaction = false
  }
  

  onTransaction(){
    this.didTransaction = true
    this.didDeposit = false
    this.didWithdraw = false
    this.didBalance = false
  }
  
    
  

  constructor(private _atm : BankService) {
    this.name = this._atm.account.fname
    this.balance = this._atm.account.balance
    this.transactions = this._atm.account.transactions
    
  }

}
