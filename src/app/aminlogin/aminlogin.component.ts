import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin service';
import{Admin} from '../models/admin'

@Component({
  selector: 'app-aminlogin',
  templateUrl: './aminlogin.component.html',
  styleUrls: ['./aminlogin.component.css']
})
export class AminloginComponent implements OnInit {
result:any;
admindata:Admin;
  constructor(private adminservice:AdminService) {
this.admindata=new Admin();

   }

  ngOnInit(): void {
  }
  admin()
  {
this.adminservice.adminlogin(this.admindata).subscribe(data=>this.result=data)
  }

}
