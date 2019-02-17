import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      lastN: this.fb.control('')
    })
  }

}
