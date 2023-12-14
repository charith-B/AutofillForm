import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../common/service/auth.service';

@Component({
  selector: 'app-verifydetails',
  templateUrl: './verifydetails.component.html',
  styleUrls: ['./verifydetails.component.css']
})
export class VerifydetailsComponent implements OnInit {

  data: any;
  formname:any;
  result: any;

  constructor(private service: AuthService,) { }

  ngOnInit(): void {
    this.service.getvalue().subscribe(res => {
      this.data =res;
      console.log(this.data);
    });
  //  this.data = localStorage.getItem('formvalue');
  //  this.formname = localStorage.getItem('formname');
  //  if (this.data) {
  //   this.data = JSON.parse(this.data);
  // } else {
  //   this.data = [];
  // }
  }

}
