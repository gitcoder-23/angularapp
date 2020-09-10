import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// for getting ng model
// required modules
import { HttpClientModule} from '@angular/common/http';
import { ThemeRoutingModule } from '../theme-routing.module';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms'; //Needed
import { AngularEditorModule } from '@kolkov/angular-editor';
//Components
import { ProductaddComponent } from './productadd/productadd.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist.component';
//For Spinners
import { NgxSpinnerModule } from "ngx-spinner";
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';//Confirmation PopupOver 

@NgModule({
  declarations: [
    ProductaddComponent,  
    ProductComponent, 
    ProductlistComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeRoutingModule,
    AngularEditorModule,
    NgxSpinnerModule,//For Spinners
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'success', // set defaults here
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], //For Spinners
})
export class ProductinfoModule { }
