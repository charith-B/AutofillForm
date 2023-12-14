import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { AuthService } from '../../common/service/auth.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private service: AuthService, private toastr: ToastrService) { }
  loginform: boolean = true
  SignUp: boolean = false
  signUpForm!: FormGroup;
  LoginForm!: FormGroup;
  result: any;

  ngOnInit(): void {
    this.changeform('login');
    this.signupform();
    this.loginforminit();


  }

  login() {
    if (this.LoginForm.valid) {
      this.service.GetUserbyCode(this.LoginForm.value.id).subscribe(res => {
        this.result = res;
        console.log(this.result);
        if (this.result.password === this.LoginForm.value.password) {
          if (this.result) {
            sessionStorage.setItem('username', this.result.id);
            // sessionStorage.setItem('role',this.result.role);
            this.router.navigate(['/Forms']);
          }
        } else {
          this.toastr.error('Invalid credentials');
        }
      });
    } else {
      this.toastr.warning('Please enter valid data.')
    }


  }
  proceedSignup() {
    if (this.signUpForm.valid) {
      this.service.RegisterUser(this.signUpForm.value).subscribe(result => {
        this.toastr.success('Registered successfully', 'Success')
        this.changeform('login');
      });
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  }
  changeform(state: any) {
    if (state == 'Signup') {
      // this.signupform();
      this.loginform = false;
      this.SignUp = true;

    }
    else if (state == 'login') {
      // this.loginforminit();
      this.SignUp = false;
      this.loginform = true;

    }
  }
  signupform() {
    this.signUpForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
    });
  }
  loginforminit() {
    this.LoginForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

}
