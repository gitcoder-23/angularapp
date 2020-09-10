import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// required modules
import { ThemeRoutingModule } from '../theme-routing.module';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms'; //Needed
import { AngularEditorModule } from '@kolkov/angular-editor';

//Directive
//import { ConfirmEqualValidatorDirective } from '../confirm-equal-validator.directive';
//import { ProtectedfieldDirective } from '../middlewares/protectedfield.directive';

//components
import {BasicinfoComponent} from './basicinfo/basicinfo.component';
import {AddressinfoComponent} from './addressInfo/addressinfo.component';
import {OthersinfoComponent} from './othersInfo/othersinfo.component';
import {MyinfoComponent} from './myinfo.component';
import { ShopperlistComponent } from './shopperlist.component';


@NgModule({
  declarations: [

    //Directives
    //ConfirmEqualValidatorDirective,
    //ProtectedfieldDirective,

    //Components
    BasicinfoComponent,
    AddressinfoComponent,
    OthersinfoComponent,
    MyinfoComponent,
    ShopperlistComponent,
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    FormsModule, //Needed
    AngularEditorModule,
    //NgForm, //Needed
    ReactiveFormsModule, //Needed
  ]
})
export class MyinfoModule { }
