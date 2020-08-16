import{RegisterModel} from '../models/registerdetail';
import{HttpClient} from '@angular/common/http';
import{Injectable} from '@angular/core'
import{Login} from '../models/login';
import { from } from 'rxjs';
import{PersonalDetails} from '../models/personaldetail';
import{LoanDetail} from '../models/loandetails'
@Injectable()
export class ApplicationService{
constructor(private http:HttpClient)
{

}
    public PostUser(register:RegisterModel)
    {
        return this.http.post("http://localhost:53872/api/UserRegistration",register);
    }
    public login(login:Login)
    {
        return this.http.post("http://localhost:53872/api/Login",login);
    }
    public PostApplicationForm(personaldetail:PersonalDetails)
    {
        return this.http.post("http://localhost:53872/api/PersonalDetail",personaldetail);
    }
// public PostLoanDetails(loandetail:LoanDetail)
// {
//     return this.http.post("http://localhost:53872/api/LoanDetail",loandetail);
// }
}