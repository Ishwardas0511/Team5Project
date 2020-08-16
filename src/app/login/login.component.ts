import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../services/applicationservice';
import{Router} from '@angular/router';
import{Login} from '../models/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
log:Login;
result;
logedin:boolean;
  constructor(private service:ApplicationService,private routs:Router) { 
    this.log=new Login();
  }

  ngOnInit(): void {
    console.log("hyye")
  }
login()
{
  this.logedin=true;
this.service.login(this.log).subscribe(data=>this.result=data);


}
newUser()
{
this.routs.navigate(['/register'])
}
}
