import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as Tesseract from 'tesseract.js';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { AuthService } from '../../common/service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private trigger: Subject<any> = new Subject();
  public webcamImage!: WebcamImage;
  private nextWebcam: Subject<any> = new Subject();
  sysImage = '';
  EnablePreview: boolean = false;
  showPreview: boolean = false;
  creditCard: boolean = false;
  passport: boolean = false;
  DLicence: boolean = false;
  formchoice: boolean = true;

  CardForm!: FormGroup;
  passportForm!: FormGroup;
  currentDate!: string[];
  datevalue!: string;
  formvalue: any[] = [];
  picture: any;
  mindate!: Date;
  today!: Date;
  environment: any;
  public modalRef!: BsModalRef;
  public modalConfig: any = { class: 'modal-lg', ignoreBackdropClick: true, backdrop: 'static' };
  textstring!: String;
  matchedData: any;
  matchedData1!: RegExpMatchArray | null;
  matchedData2!: RegExpMatchArray | null;
  imageUrl: any;
  selectedMonth: any = "00";
  selectedDay: any = "00";
  formstate:any;
  fn:any
  db: any;
  pn: any;
  di: any;
  formtype: any;
  // webcamImage:WebcamImage | undefined;




  constructor(private formBuilder: FormBuilder, private router: Router, private camera: Camera, private modalService: BsModalService,private service: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.environment = "http://localhost:4200";
    localStorage.clear();
    this.today = new Date();
    var month = this.today.getMonth();
    var day = this.today.getDate();
    var year = this.today.getFullYear();
    this.mindate = new Date(year - 1, month, day);
    const current = new Date();
    this.currentDate = [current.getMonth() + 1 + "/" + current.getFullYear()];
    console.log(this.currentDate);
this.cardformbuild();
this.passportformbuild();
    this.chooseForm('load');
  }
  cardformbuild(){
    this.CardForm = this.formBuilder.group({
      CardNumber: ['', [Validators.required, Validators.maxLength(16), Validators.pattern(/^\d+$/)]],
      Name: ['', Validators.required],
      selectedMonth: ['00'],
      selectedDay: ['00'],
      CVV: ['', [Validators.required, Validators.maxLength(4), Validators.pattern(/^\d+$/)]],
      formtype:['credit',[Validators.required]],

    });
  }
  passportformbuild(){
    this.passportForm=this.formBuilder.group({
      fullName:['',[Validators.required]],
      DOB:['',[Validators.required]],
      passportNo:['',[Validators.required]],
      dateOfIssue:['',[Validators.required]],
      formtype:['passport',[Validators.required]],
    });
  }
  chooseForm(form:any){
    if(form=="CC"){
      this.creditCard= true;
      this.passport= false;
      this.DLicence= false;
      this.formchoice= false;
      this.formstate=form;
    }
    else if(form=="DL"){
      this.creditCard= false;
      this.passport= false;
      this.DLicence= true;
      this.formchoice= false;
    }
     else if(form=="PP"){
      this.creditCard= false;
      this.passport= true;
      this.DLicence= false;
      this.formchoice= false;
      this.formstate=form;
    }
    else{
      this.creditCard= false;
      this.passport=false;
      this.DLicence= false;
      this.formchoice= true;
    }
  }

  handlepicture(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }

  upload() {

  }
  onSubmit(value: any[],formname:any) {
    console.log(value);
    // value.push(this.formtype=formname)
    this.formvalue.push(value);
    // this.formvalue.push(formname);
    console.log(this.formvalue);
    this.service.submitvalue(value).subscribe(result => {
      this.toastr.success('Form submitted', 'Success')
    });

    // localStorage.setItem('formvalue', JSON.stringify(this.formvalue));
    // localStorage.setItem('form', formname);
    this.router.navigate(['/Verify-Details']);
   

  }
  takePicture(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, this.modalConfig));
  }


  public getSnapshot(): void {
    this.EnablePreview = true;
    this.trigger.next(void 0);
  }
  diaplaypreview() {
    this.showPreview = true;

  }
  public captureImg(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.sysImage = webcamImage!.imageAsDataUrl;
    console.info('got webcam image', this.sysImage);
  }
  public get invokeObservable(): Observable<any> {
    return this.trigger.asObservable();
  }
  CloseModal() {
    this.modalRef.hide();
  }
  selecteddate(value: string) {
    // var splitted = value.slice(0, 7);
    // this.datevalue=splitted;

  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl = reader.result as string;
      console.log(this.imageUrl);
      this.recognizeText(this.imageUrl);
    };

    reader.readAsDataURL(file);

  }


  recognizeText(imageUrl: string,) {


    Tesseract.recognize(imageUrl)
      .then(result => {
        console.log(result);
        this.textstring == result.data.text;
        console.log(result.data.text);
        if(this.creditCard==true){
        const regex = /\b\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}\b/g;
        const regex1 = /\b\d{2}\/\d{2}\b/g;
        const regex2 = /\b([A-Z\s]+){10}\b/g;
        this.matchedData = result.data.text.match(regex)
        this.matchedData1 = result.data.text.match(regex1)
        this.matchedData2 = result.data.text.match(regex2);
        if (this.matchedData) {

          console.log("sixteenDigitNumber matched");
          console.log(this.matchedData);
        } else {
          console.log("No 16-digit number found in string");
        }
        if (this.matchedData1) {

          console.log("date matched");
          console.log(this.matchedData1);
          const str = this.matchedData1.join();
          const dateStr = str;
          const [monthStr, dayStr] = dateStr.split('/');

          const month = parseInt(monthStr, 10);
          const day = parseInt(dayStr, 10);
          console.log(this.matchedData1);
          console.log(month);
          console.log(day);
          this.selectedMonth = month;
          this.selectedDay = day;
        } else {
          console.log("No date found in string");
        }
        if (this.matchedData2) {

          console.log("name matched");
          console.log(this.matchedData2);
          let myString = this.matchedData2;
          let newString = myString.slice(0, 2); // 'He'
          console.log(newString);
        } else {
          console.log("No name found in string");
        }
        this.CardForm = this.formBuilder.group({
          CardNumber: [this.matchedData, [Validators.required, Validators.maxLength(16), Validators.pattern(/^\d+$/)]],
          Name: [this.matchedData2, Validators.required],
          // ValidTill: [this.matchedData1, Validators.required],
          selectedMonth: [this.selectedMonth],
          selectedDay: [this.selectedDay],
          CVV: ['', [Validators.required, Validators.maxLength(4), Validators.pattern(/^\d+$/)]],
          formtype:['credit',[Validators.required]],

        });
      }
else if(this.passport==true){
  this.fn='Charith Boddu';
  this.db='10/25/1996';
  this.pn='V1615486';
  this.di='07/15/2021';
  // this.passportForm=this.formBuilder.group({
  //   fullName:['Charith Boddu',[Validators.required]],
  //   DOB:['10/25/1996',[Validators.required]],
  //   passportNo:['V1615486',[Validators.required]],
  //   dateOfIssue:['07/15/2021',[Validators.required]],
    
  // })
}
      });
    this.CloseModal();
  }

}

