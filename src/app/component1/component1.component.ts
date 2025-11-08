import { Component, OnInit } from '@angular/core';
import { Componet2Component } from '../componet2/componet2.component';
@Component({
  selector: 'app-component1',
 
  
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {

  name="divya";

  msg="";
  msg2="";

  light=true;

  sayHi(){
    this.msg="hi "+this.name;

  }
  sayHello(){

    this.msg2=`hello ${this.name}`;
  }

}
