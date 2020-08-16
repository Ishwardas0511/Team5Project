import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import{RouterModule,Routes} from '@angular/router';
import{HttpClient, HttpClientModule} from '@angular/common/http'
import{ApplicationService} from './services/applicationservice';
import{AdminService} from './services/admin service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng5SliderModule } from 'ng5-slider';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { EmiComponent } from './emi/emi.component';
import{CommonModule} from '@angular/common';
import { AminloginComponent } from './aminlogin/aminlogin.component';
import { GeteligibilityComponent } from './geteligibility/geteligibility.component'
import { DatePipe } from '@angular/common';
import { LoanofferComponent } from './loanoffer/loanoffer.component';
import{DataService} from './services/dataservice';
import { ApplicationformComponent } from './applicationform/applicationform.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import{SelectService} from './services/selectservice';
import { HomeComponent } from './home/home.component';
var myRoutes:Routes=[{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"emi",component:EmiComponent},
{path:"adminlogin",component:AminloginComponent},
{path:"geteligiblity",component:GeteligibilityComponent},
{path:"loanoffer",component:LoanofferComponent},
{path:"applicationform",component:ApplicationformComponent },
{path:"aboutus",component:AboutusComponent},
{path:"contactus",component:ContactusComponent},
{path:"Home",component:HomeComponent},
// {path:'**',component:HomepageComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomepageComponent,
    LoginComponent,
    EmiComponent,
    AminloginComponent,
    GeteligibilityComponent,
    LoanofferComponent,
    ApplicationformComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FormsModule,
  HttpClientModule,
  RouterModule.forRoot(myRoutes),
  Ng5SliderModule,
  CommonModule

  ],
  exports: [RouterModule],
  providers: [ApplicationService,AdminService,DatePipe,DataService,SelectService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
