import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// for getting ng model
// required modules
import { HttpClientModule} from '@angular/common/http';
import { ThemeRoutingModule } from '../theme-routing.module';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms'; //Needed


//For Spinners
import { NgxSpinnerModule } from "ngx-spinner";
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';//Confirmation PopupOver 

//Components
import { QuantityComponent } from './quantity/quantity.component';
import { QuantitylistComponent } from './quantitylist/quantitylist.component';



@NgModule({
  declarations: [QuantityComponent, QuantitylistComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ThemeRoutingModule,
    NgxSpinnerModule,//For Spinners
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'success', // set defaults here
    }),

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], //For Spinners
})
export class QuantityModule { }
