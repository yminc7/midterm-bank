import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {

 account: any = {
    fname: 'Bruce',
    lname: 'Wayne',
    name: 'Wayne, Bruce',
    email: 'adslkjf@adlkf.com',
    age: 15,
    address: {
      street: '1234 street st',
      city: 'Gotham',
      state: 'California',
      zip: 12345,
      country: 'United States'
    },
    balance: 0.01,
    currency: 'usd',
    transactions: [
      {
        date: '01-01-01',
        type: 'withdrawal',
        amount: 200.00,
        currency: 'usd'
      },
      {
        date: '02-02-02',
        type: 'deposit',
        amount: 100.00,
        currency: 'usd'
      },
      {
        date: '03-03-03',
        type: 'withdrawal',
        amount: 2.00,
        currency: 'usd'
      }
    ]
    
  };
  
  
  
  withdraw(amount){
    if( this.account.balance < amount){
    alert(`Not enough money.`)}
    else{
       this.account.balance -= amount
    }
    this.account.transactions.push({
    date: `11-12-18`,
    type: `Withdraw`,
    amount: `${amount}`,
    currency: `USD`
    }
    )
  }
  
  
  deposit(amount){
    this.account.balance += amount
    this.account.transactions.push({
    date: `11-12-18`,
    type: `Deposit`,
    amount: `${amount}`,
    currency: `USD`
    }
    )
  }
  
  
  name(lastName, firstName){
    this.account.lname = lastName
    this.account.fname = firstName
  }
  
  email(email){
    this.account.email = email
  }
  
  
  constructor() { }
}
