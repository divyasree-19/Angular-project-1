import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
 profiles=[
  {name:'divya',age:17,profession:'student'},
  {name:'riya',age:25,profession:'developer'},
  {name:'megalai',age:42,profession:'manager'}
 ];

 getshowcolor(age:number){
  if (age<18) return '0 4px 12px green';
  else if (age <= 33) return '0 4px 12px red';
  else return '0 4px 12px yellow';
 }
  
}
 