import { Injectable } from '@angular/core';
import { Brand } from '../models/brand';
import { Model } from '../models/model';


export class SelectService {

  getBrands() {
    return [
     new Brand(1,'Ford'),
new Brand(2,'Honda'),
new Brand(3,'Hyundai'),
new Brand(4,'Mahindra'),
new Brand(5,'Maruti Suzuki'),
new Brand(6,'Renault'),
new Brand(7,'Tata'),
new Brand(8,'Toyota'),
    ];
  }
  
  getStates() {
   return [
     new Model(1, 1, 'Aspire'),
new Model(2,1,'EcoSport'),
new Model(3,1,'Endeavour'),
new Model(4,1,'Figo'),
new Model(5,1,'FreeStyle'),
new Model(6,1,'Mustang'),
new Model(7,2,'Amaze'),    
new Model(8,2,'City'),
new Model(9,2,'Civic'),
new Model(10,2,'CR-V'),
new Model(11,2,'Facelift'),     
new Model(12,2,'HR-V'),
new Model(13,2,'Jazz'),
new Model(14,3,'Aura'),
new Model(15,3,'Creta'),
new Model(16,3,'Elantra'),
new Model(17,3,'EliteI20'),
new Model(18,3,'Santro'),
new Model(19,3,'Verna'),
new Model(20,3,'Xcent'),      
new Model(21,4,'AlturasG4'),
new Model(22,4,'Bolero'),
new Model(23,4,'Scorpio'),
new Model(24,4,'Thar'),
new Model(25,4,'XUV300'),
new Model(26,4,'XUV500'),     
new Model(27,5,'Alto'),
new Model(28,5,'Baleno'),
new Model(29,5,'DZire'),
new Model(30,5,'Ertiga'),
new Model(31,5,'Swift'),
new Model(32,5,'VitaraBrezza'),
new Model(33,5,'WagonR'),
new Model(34,6,'Duster'), 
new Model(35,6,'Kwid'), 
new Model(36,6,'Triber'), 
new Model(37,7,'Altroz'),
new Model(38,7,'Gravitaz'),
new Model(39,7,'Harrier'),
new Model(40,7,'Nexon'),
new Model(41,7,'Tiago'),
new Model(42,8,'Camry'),
new Model(43,8,'Crysta'),
new Model(44,8,'Fortuner'),
new Model(45,8,'Glanza'),
new Model(46,8,'Yaris')
    ];
  }

}