import { Component, OnInit, LOCALE_ID } from '@angular/core';
import{Eligibilty} from '../models/eligibilityapplicant';
import { DatePipe } from '@angular/common';
import{VehicleDetails} from '../models/vehicledetail';
import{PersonalDetails} from '../models/personaldetail'
import { Route } from '@angular/compiler/src/core';
import{Router} from '@angular/router'
import{DataService} from '../services/dataservice';
import { Brand } from '../models/brand';
import { Model } from '../models/model';
import{ SelectService } from '../services/selectservice';
import{EmploymentDetail} from '../models/employementdetail';
import{LoanDetail} from '../models/loandetails';
@Component({
  selector: 'app-geteligibility',
  templateUrl: './geteligibility.component.html',
  styleUrls: ['./geteligibility.component.css']
})
export class GeteligibilityComponent implements OnInit {
  selectedBrand: Brand=new Brand(1,'Ford');
  brands: Brand[];
  models: Model[];
  employementdetail:EmploymentDetail;
vehicledetail:VehicleDetails;
loandetail:LoanDetail;
 

  eligible : Eligibilty;
  vdetails : VehicleDetails;
  maxLoanAmount : string;
  curYear = Number(new Date().getFullYear());
  yearDiff : number;
  enteredyear : number;
  eligibleMsg : string;
  showbutton : boolean;
  eligibleLoanAmt : string;

  

  constructor(private datePipe: DatePipe,private routes:Router,private dataservice:DataService,private selectservice:SelectService) { 
    this.eligible = new Eligibilty();
    this.vdetails = new VehicleDetails();
    this.employementdetail=new EmploymentDetail();
    this.employementdetail.emp_type = "Self-Employed";
    this.eligible.gender = "Male";
    this.eligibleMsg = "";
    this.showbutton = false;
    this.employementdetail.other_income='0';
    this.brands=[];
    this.models=[];
  }

  ngOnInit(): void {
    this.brands = this.selectservice.getBrands();
    this.onSelect(this.selectedBrand.id);
  }
  checkEligibility(){
    this.enteredyear = Number(this.datePipe.transform(this.eligible.dob, 'yyyy'));
    //this.enteredyear = Number(this.eligible.dob.getFullYear());
    this.yearDiff = this.curYear - this.enteredyear;
    // Number(this.details.yearly_salary)*4;

    if(this.yearDiff>=21 && (Number(this.employementdetail.yearly_salary)+Number(this.employementdetail.other_income))>400000)
    {
      this.showbutton=true;
      this.maxLoanAmount = (Number(this.employementdetail.yearly_salary)*4).toString();
      if(Number(this.maxLoanAmount)< Number(this.vdetails.onroad_price))
      {
        this.eligibleLoanAmt = this.maxLoanAmount;
      }
      else
      {
        this.eligibleLoanAmt = (0.9*Number(this.vdetails.onroad_price)).toString();
      }

      this.eligibleMsg = "Congrats ! you are eligible for loan";
    }
    else
    {
      this.eligibleMsg = "Sorry you are not eligible for Loan :(";
    }
   
  }
  proceed()
  {
    this.dataservice.set_empdetails(this.employementdetail);
this.dataservice.setoption(this.eligibleLoanAmt);
this.routes.navigate(['/loanoffer'])
  }
  onSelect(brandid) {
    this.models = this.selectservice.getStates().filter((item) => item.brandid == brandid);
  }

}
