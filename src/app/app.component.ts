import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-course';

  _message = "Aarya";
  onchange(val:any){
    this._message = val;
  }
  students:any = [
    {name:"John",Proffession:"Engineer",Age:"30"},
    {name:"Alice",Proffession:"Doctor",Age:"35"},
    {name:"Andrew",Proffession:"Lawyer",Age:"20"}
  ]

  regForm: FormGroup;
  constructor(){

  }
  ngOnInit(){
    this.regForm = new FormGroup({
      fname: new FormControl(),
      lname: new FormControl(),
      office: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      confirm_password: new FormControl(),
      email: new FormControl(),
      contactno: new FormControl(),
    })
  }
  register(){
    console.log(this.regForm.value);
  }
}
