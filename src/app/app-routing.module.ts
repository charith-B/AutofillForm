import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CameraComponent } from './components/layout/camera/camera.component';
import { FormComponent } from './components/layout/form/form.component';
import { HomeComponent } from './components/layout/home/home.component';
import { VerifydetailsComponent } from './components/layout/verifydetails/verifydetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent, data: {title: 'Home'} },
  { path: 'Forms', component: FormComponent, data: {title: 'Forms'} },
  { path: 'Verify-Details', component: VerifydetailsComponent, data: {title: 'Verify details'} },
  { path: 'camera', component: CameraComponent, data: {title: 'Camera'} },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
