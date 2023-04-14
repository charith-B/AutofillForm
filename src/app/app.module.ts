import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Camera } from '@ionic-native/camera/ngx';
import { WebcamModule } from 'ngx-webcam';
import {ModalModule} from 'ngx-bootstrap/modal';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/layout/home/home.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FormComponent } from './components/layout/form/form.component';
import { VerifydetailsComponent } from './components/layout/verifydetails/verifydetails.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FormComponent,
    VerifydetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    WebcamModule,
    ModalModule.forRoot(),
    
  ],
  providers: [Camera],
  bootstrap: [AppComponent]
})
export class AppModule { }
