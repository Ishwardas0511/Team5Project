import { Component, OnInit,Input } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
login:boolean;
  constructor(private routs:Router) { 
    this.login=false;
  }

  ngOnInit(): void {
  }
  abc()
  {this.login=true;
    
  }
  xyz()
  {
    this.routs.navigate(['/login']);
  }
  pqr()
  {
    this.routs.navigate(['/adminlogin']);
  }
  emiCalculate()
  {
    this.routs.navigate(['/emi']);
  }
  geteligiblity()
  {
     this.routs.navigate(['/geteligiblity']);
  }
}
