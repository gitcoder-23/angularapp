// Angular
import { CommonModule } from '@angular/common';
//For Spinners
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {MyinfoModule} from "./shoperInfo/myinfo.module";
import { AdminInfoModule } from './admininfo/admininfo.module';
import { ProductinfoModule } from './productinfo/productinfo.module';
import { QuantityModule } from './quantity/quantity.module'
// for getting ng model
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms'; //Needed

//protected-Field & Equal-field validation Directive
//import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
//import { ProtectedfieldDirective } from '../../middlewares/protectedfield.directive';//Needed

//NGRX Modules
//import { StoreModule } from '@ngrx/store';
//For Spinners
import { NgxSpinnerModule } from "ngx-spinner";
//For Spinners2
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';



import { CustomerComponent } from './customer/customer.component';
import { CustomeraddComponent } from './customer/customeradd.component';
import { BanneraddComponent } from './banner/banneradd.component';
import { CategoryaddComponent } from './category/categoryadd.component';
import { CategorylistComponent } from './category/categorylist.component';
import { SettingsComponent } from './settings/settings.component';
import { ResetPassComponent } from './resetpass/resetpass.component';


// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { from } from 'rxjs';
//Confirmation edit-delete
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';//Confirmation Popup 


@NgModule({
  imports: [
    CommonModule, //Needed
    ThemeRoutingModule,
    FormsModule, //Needed
    AngularEditorModule,
    //NgForm, //Needed
    NgxSpinnerModule,//For Spinners
    LoadingBarRouterModule,//For Spinners2
    LoadingBarModule,//For Spinners2
    ReactiveFormsModule, //Needed 
    MyinfoModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'success', // set defaults here
    }),
    AdminInfoModule,
    ProductinfoModule,
    QuantityModule,
    
  ],
  declarations: [
   
    CustomerComponent,
    CustomeraddComponent,
    BanneraddComponent,
    CategoryaddComponent,
    CategorylistComponent,
    SettingsComponent,
    ResetPassComponent,
    //Directives beeded
    //ConfirmEqualValidatorDirective,
    //ProtectedfieldDirective,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA], //For Spinners



})
export class ThemeModule { }
