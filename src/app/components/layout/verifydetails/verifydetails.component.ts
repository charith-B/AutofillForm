import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verifydetails',
  templateUrl: './verifydetails.component.html',
  styleUrls: ['./verifydetails.component.css']
})
export class VerifydetailsComponent implements OnInit {

  data: any;

  constructor() { }

  ngOnInit(): void {
   this.data = localStorage.getItem('formvalue');
   if (this.data) {
    this.data = JSON.parse(this.data);
  } else {
    this.data = [];
  }
   console.log(this.data);
  }

}
