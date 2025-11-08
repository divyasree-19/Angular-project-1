import { Component, OnInit } from '@angular/core';
import {  Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-componet2',
  templateUrl: './componet2.component.html',
  styleUrls: ['./componet2.component.css']
})
export class Componet2Component
{ 
  title="component2 hiii...";


// ✅ Custom Two-Way Binding Part
  parentValue = "hello"; 
  top_value="";
}
