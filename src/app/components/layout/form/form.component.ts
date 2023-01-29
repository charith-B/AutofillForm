import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  CardForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.CardForm = this.formBuilder.group({
      CardNumber: ['', [Validators.required,Validators.maxLength(16),Validators.pattern(/^\d+$/)]],
      Name: ['', Validators.required],
      ValidTill: ['', Validators.required],
      CVV: ['', [Validators.required,Validators.maxLength(4),Validators.pattern(/^\d+$/)]]
    });
  }
  onSubmit(){

  }
  
}
