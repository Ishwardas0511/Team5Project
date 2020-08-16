import { Component, OnInit } from '@angular/core';
import{RegisterModel} from '../models/registerdetail';
import{ApplicationService} from '../services/applicationservice';
import { importType } from '@angular/compiler/src/output/output_ast';
import{Router} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
register:RegisterModel;
result;
  constructor(private service:ApplicationService,private routs:Router) {
this.register=new RegisterModel();
   }

  ngOnInit(): void {
  }
  submit()
  {
    
    this.service.PostUser(this.register).subscribe((data)=>this.result=data)
    console.log(this.result)
    this.routs.navigate(['login']);
   

  }

}
