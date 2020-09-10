import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// required modules
import { ThemeRoutingModule } from '../theme-routing.module';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms'; //Needed

//protected-Field & Equal-field validation Directive
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
import { ProtectedfieldDirective } from '../middlewares/protectedfield.directive';


import { AdminviewComponent } from './adminview/adminview.component';
import { AdminaddComponent } from './adminadd/adminadd.component';
import { ResetadminComponent } from './resetadmin/resetadmin.component';
import { AdmininfoComponent } from './admininfo/admininfo.component';



@NgModule({
  declarations: [
    //Directives
    ConfirmEqualValidatorDirective,
    ProtectedfieldDirective,

    //All Components
    AdminviewComponent, 
    AdminaddComponent, 
    ResetadminComponent, 
    AdmininfoComponent,
    
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   // NgForm,
    ThemeRoutingModule
  ]
})
export class AdminInfoModule { }
