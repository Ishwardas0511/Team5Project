import{ PersonalDetails } from '../models/personaldetail';
import{ EmploymentDetail } from '../models/employementdetail';
import{VehicleDetails} from '../models/vehicledetail';
import{LoanDetail} from '../models/loandetails';
export class DataService{
    maxloanamt:string;
    personaldetail:PersonalDetails;
    employmentdetail:EmploymentDetail;
    loandetailfromdataservice:LoanDetail;
  vehicaldetail:VehicleDetails;
constructor(){

    this.personaldetail=new PersonalDetails();
    this.loandetailfromdataservice=new LoanDetail();
    this.employmentdetail=new EmploymentDetail();
}
    setoption(value:string)
    {
this.maxloanamt=value;
    }
    getoption()
    {
     return this.maxloanamt;
    }
    setp_detail(personaldetail:PersonalDetails)
{
    this.personaldetail=personaldetail;
    this.personaldetail.emp_type=this.employmentdetail.emp_type;
    this.personaldetail.yearly_salary=this.employmentdetail.yearly_salary;
    this.personaldetail.other_income=this.employmentdetail.other_income;



    this.personaldetail.loan_amt=this.loandetailfromdataservice.loan_amt;
this.personaldetail.loan_emi=this.loandetailfromdataservice.loan_emi;
this.personaldetail.loan_intrest=this.loandetailfromdataservice.loan_intrest;
this.personaldetail.loan_tenure=this.loandetailfromdataservice.loan_tenure;






}

get_pdetail()
{
    return this.personaldetail;
}
set_empdetails(employmentdetail:EmploymentDetail)
{
this.employmentdetail=employmentdetail;
}
set_vehicaldetail(vehicaldetail:VehicleDetails)
{
    this.vehicaldetail=vehicaldetail;
}
set_loandetail(loandetail:LoanDetail)
{
    this.loandetailfromdataservice=loandetail;
}

}