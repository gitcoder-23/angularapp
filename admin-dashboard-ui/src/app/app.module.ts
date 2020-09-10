import { BrowserModule } from '@angular/platform-browser';
//For Spinners
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Toastermodule
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';



// for getting ng model
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// For api intregration
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

//import { AuthModule } from './auth/auth.module';
import { ConfirmEqualValidatorDirective } from './views/register/confirm-equal-validator.directive';
import { UniqueValidatorDirective } from './views/register/unique-validator.directive';
import { uniquePhoneValidator } from './views/register/unique-validator.directive';  // multi directive
//For Spinners
import { NgxSpinnerModule } from "ngx-spinner";
//For Spinners2
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,

  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { AuthModule } from './services/auth/heade.auth.module';
import { TokenInterceptor } from './services/auth/token.interceptor';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SampleComponent } from './sample/sample.component';
import { ProtectedfieldDirective } from './middlewares/protectedfield.directive';
import { ResetpasswordComponent } from './views/resetpassword/resetpassword.component';
import { OtpComponent } from './views/otp/otp.component';
import { ForgetpasswordComponent } from './views/forgetpassword/forgetpassword.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
//Confirmation edit-delete
import { environment } from '../environments/environment';//Confirmation Popup 
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
//NGRX Modules
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './stores';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { SettingsEffects } from './stores/settings/settings.effects';
//import { SettingsCustomSerializer } from './stores/settings/utils';
//import { RouterStateSerializer } from '@ngrx/router-store';
import { ProductEffects } from './stores/product/product.effects';
import { QuantityEffects } from './stores/quantity/quantity.effects';
//import { ProductCustomSerializer } from './stores/product/utils';





@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpClientModule,
    AngularEditorModule,
    NgxSpinnerModule,//For Spinners
    LoadingBarRouterModule,//For Spinners2
    LoadingBarModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
    //AuthModule, 
    ToastrModule.forRoot({
      timeOut: 1000,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true
    }),  
   
    NgbModule, 
    //NGRX Module import
    StoreModule.forRoot(reducers, 
      { metaReducers }), 
      !environment.production ? StoreDevtoolsModule.instrument() : [], 
      EffectsModule.forRoot([SettingsEffects, ProductEffects, QuantityEffects]),
    
    

  ],

  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    ConfirmEqualValidatorDirective,
    SampleComponent,
    ProtectedfieldDirective,
    UniqueValidatorDirective,
    uniquePhoneValidator, // multi directive
    ResetpasswordComponent,
    OtpComponent,
    ForgetpasswordComponent,
  
    
    
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,

    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    /* {
      provide: RouterStateSerializer,
      useClass: SettingsCustomSerializer,
    }, */
    /* {
      provide: RouterStateSerializer,
      useClass: ProductCustomSerializer,
    }, */
      
  ],
  
schemas: [CUSTOM_ELEMENTS_SCHEMA], //For Spinners
  bootstrap: [AppComponent]
})
export class AppModule { }
