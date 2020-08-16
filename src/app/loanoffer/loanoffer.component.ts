import { Component, OnInit,Input } from '@angular/core';
import{DataService} from '../services/dataservice';
import { Router } from '@angular/router';
import{LoanDetail} from '../models/loandetails';
import{ApplicationService} from '../services/applicationservice';
@Component({
  selector: 'app-loanoffer',
  templateUrl: './loanoffer.component.html',
  styleUrls: ['./loanoffer.component.css']
})
export class LoanofferComponent implements OnInit {
loan:number[];
EmiMonths:number[];
 maxloanamt:string;
loandetail:LoanDetail;
local_loanamount:number;
local_loanmonths:number;
//applicationservic:ApplicationService;
current_loanamt:number;
current_loanmonths:number;
current_intrest:any;
current_processingfee:number;
current_loanemi:number;

  constructor(private dataservice:DataService,private routs:Router,private app:ApplicationService) {
    this.loan=[];
    this.EmiMonths=[];
this.loandetail=new LoanDetail();
    this.maxloanamt=this.dataservice.getoption();
   
   }

  ngOnInit() {
  
    for (let value=Number(this.maxloanamt);value>1000;value=value-1000) {
     this.loan.push(value); 
    }
    for (let value=84;value>12;value--) {
      this.EmiMonths.push(value); 
     }
    
    
  }
loantenure(event)
{
  this.local_loanmonths=event;
}
loanamt(event:any)
{
this.local_loanamount=event;
}
change()
{
  this.current_loanamt=this.local_loanamount;
  this.current_loanmonths=this.local_loanmonths;
  this.current_intrest=8.25;
  this.current_processingfee=1770;
  //logic for calculate emi
  var monthly=(this.current_intrest/100)/12;
  var top = Math.pow((1 + monthly), this.current_loanmonths);
  var bottom=top-1;
  var sp=top/bottom;
  this.current_loanemi = ((this.current_loanamt * monthly) * sp);
  this.loandetail.loan_intrest=this.current_intrest;
  this.loandetail.loan_emi=Math.round(this.current_loanemi).toString();
  this.loandetail.loan_amt=this.current_loanamt.toString();
this.loandetail.loan_tenure=this.current_loanmonths.toString();

}
ApplyLoan()
{
  this.dataservice.set_loandetail(this.loandetail);
this.routs.navigate(['/applicationform']);



}
}

