import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  CardForm!: FormGroup;
  currentDate!: string[];
  datevalue!: string;
 formvalue: any[] = [];
  picture: any;
  mindate!: Date;
  today!: Date;
  environment:any;
  


  constructor(private formBuilder: FormBuilder,private router: Router,private camera: Camera) { }

  ngOnInit(): void {
    this.environment="http://localhost:4200";
    localStorage.clear();
    this.today = new Date();
    var month = this.today.getMonth();
    var day = this.today.getDate();
    var year = this.today.getFullYear();
    this.mindate= new Date(year - 1, month, day);
    const current = new Date();
    this.currentDate = [current.getMonth()+1+"/"+current.getFullYear()];
    console.log(this.currentDate);

    this.CardForm = this.formBuilder.group({
      CardNumber: ['', [Validators.required,Validators.maxLength(16),Validators.pattern(/^\d+$/)]],
      Name: ['', Validators.required],
      ValidTill: ['MM/YYYY', Validators.required],
      CVV: ['', [Validators.required,Validators.maxLength(4),Validators.pattern(/^\d+$/)]]
    });
  }
  onSubmit(value:any[]){
    console.log(value);
    this.formvalue.push(value);
    console.log(this.formvalue);
localStorage.setItem('formvalue', JSON.stringify(this.formvalue));
this.router.navigate(['/Verify-Details']);


  }
  takePicture() {
    window.open(this.environment+'/camera');
  // const options: CameraOptions = {
  //   quality: 100,
  //   destinationType: this.camera.DestinationType.DATA_URL,
  //   encodingType: this.camera.EncodingType.JPEG,
  //   mediaType: this.camera.MediaType.PICTURE
  // };
  // this.camera.getPicture(options).then((imageData) => {
  //   // Convert the base64 string to an image and display it
  //   this.picture = 'data:image/jpeg;base64,' + imageData;
  // }, (err) => {
  //   console.log(err);
  // });
}
  selecteddate(value:string){
    // var splitted = value.slice(0, 7);
    // this.datevalue=splitted;
   
  }
}
