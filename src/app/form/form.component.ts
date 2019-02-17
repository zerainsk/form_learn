import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  @Output() change = new EventEmitter();
  constructor(
    public fb: FormBuilder
    ) { 

    }
    
  ngOnInit() {
    this.formGroup =  this.fb.group({
      firstN: ['',[Validators.required,Validators.minLength(2)]],
      lastN: this.fb.control('',[Validators.required,Validators.minLength(2)]),
      email: ['',[Validators.required,Validators.email]],
      age: [,[Validators.required,Validators.min(0),Validators.max(99)]],
    })
  }

EmailValidator(control: AbstractControl){
  const value:string = control.value;
  if(value && value.includes('@')){
    return null;
  }
  return{
    email: {
      actual: value,
      expect: 'email@emample.com'
    }
  }
}

  onSubmit(form: FormGroup){
    if (form.valid) {
    const {firstN,lastN,email,age} = form.value;
    const user = new User(firstN,lastN,email,age);
    this.change.emit(user);
    } else {
      ['firstN',
        'lastN',
        'age',
        'email'].forEach((key: string)=>{
          form.get(key).markAsTouched();
        })
    }
    
  }
}