import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service'



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  lname;
  fname;
  emailCustomer;
  message;
  submitted = false;
  empty= ' '
  
  
  clicked(){
    this._atm.name(this.lname, this.fname)
    this._atm.account.lname = this.lname;
    this._atm.account.fname = this.fname;
    this._atm.email(this.emailCustomer)
    this._atm.account.email = this.emailCustomer
    this.submitted = true
  }
  
  

  constructor(private _atm : BankService) {
      // this.emailCustomer = this._atm.account.email
      // this.lname = this._atm.account.lname
      // this.fname = this._atm.account.fname
      
  }
  
  
  ngOnInit() {
  }

}
