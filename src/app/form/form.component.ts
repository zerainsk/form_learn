import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    public fb: FormBuilder
    ) { 

    }
    
  ngOnInit() {
    this.formGroup =  this.fb.group({
      firstN: [''],
      lastN: this.fb.control(''),
      email: [''],
      age: [''],
    })
  }

  onSubmit(form: FormGroup){
    console.log(form);
    const {firstN,lastN,email,age} = form.value;
    console.log(firstN,lastN,email,age);
    const user = new User(firstN,lastN,email,age);
    console.log(user);
  }
}