import { Component, OnInit } from '@angular/core';
import {  Input, Output, EventEmitter } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component{
  light=true;
  line=true;
 textColor='red';
 isSpecial=true;
 msg="";
 username='';

 handleClick(){
   this.msg="btn clicked";
 }

 handleKey(event: any) {
  console.log(event.target.value);
}
count=0;
 styleObj={
    backgroundColor: 'pink',
    fontSize:'20px'
  }

Value(value:string){
  console.log("input value:",value)
}

  sayHello() {
    alert('Hello from Child!');
  }

  text="";


  //two way binding
  @Input() value: string = '';   // gets data from parent
  @Output() valueChange = new EventEmitter<string>(); // sends data to parent

  update(event: any) {
    const newValue = event.target.value;
    this.value = newValue;
    this.valueChange.emit(newValue);
  }

  //ngIf directive
  isLog=false;
  Log(){
    this.isLog=!this.isLog;
  }

  //ngSwitch directive
  day="";
 upadte_day(event: any){
  const day=event.target.value;
  console.log(day)
  this.day=day;
 }

 //ngFor
 fruits:string[]=['apple','banana','mongo'];

students = [
  { id: 1, name: 'Divya', grade: 'A' },
  { id: 2, name: 'Sree', grade: 'B' },
  { id: 3, name: 'Priya', grade: 'A+' }
];

//component interaction
@Input() new_value:string="";
 @Output() new_valueChange = new EventEmitter<string>();

update_new(event:any){
   const new_val=event.target.value;
   this.value=new_val;
   this.new_valueChange.emit(new_val);  
}

  //service
  msg2="";
  constructor(
    private myService: MyServiceService,
    private studentService: StudentService
  ) {
    console.log('Constructor: Component created');
  }

  // ngOnInit: safe place to fetch data
  ngOnInit(): void {

    // use service 1
    this.msg2 = this.myService.getMsg();

    // use service 2
    console.log('ngOnInit: Fetching data now...');
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
      console.log('Data received:', this.students);
    });
  }

}

