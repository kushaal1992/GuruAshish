import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';

const routes: Routes = [
  {path: 'enquiry-form', component: EnquiryFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
