import { Component, OnInit } from '@angular/core';
import { importType } from '@angular/compiler/src/output/output_ast';
import{PersonalDetails} from '../models/personaldetail'
import { DataService } from '../services/dataservice';
import { ApplicationService } from '../services/applicationservice';
import{LoanDetail} from '../models/loandetails';
import{VehicleDetails} from '../models/vehicledetail';
@Component({
  selector: 'app-applicationform',
  templateUrl: './applicationform.component.html',
  styleUrls: ['./applicationform.component.css']
})
export class ApplicationformComponent implements OnInit {
details:PersonalDetails;
personaldetailfromdataservice:PersonalDetails;
loandetail:LoanDetail;
vehicaldetail:VehicleDetails;
result
  constructor(private dataservice:DataService,private applicationservice:ApplicationService) {
    this.details=new PersonalDetails();
    this.personaldetailfromdataservice=new PersonalDetails();
   this.vehicaldetail=new VehicleDetails();
   this.loandetail=new LoanDetail();
  
  }

  ngOnInit(): void {
  }
  UserDetail(){
    this.dataservice.setp_detail(this.details);
 this.personaldetailfromdataservice=this.dataservice.get_pdetail();
 this.applicationservice.PostApplicationForm(this.personaldetailfromdataservice).subscribe((data)=>this.result=data);

  }
}
