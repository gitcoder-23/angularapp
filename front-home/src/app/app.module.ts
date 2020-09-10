import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// for getting ng model
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms'; //Needed


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginmenuComponent } from './components/loginmenu/loginmenu.component';
import { ActionheaderComponent } from './components/actionheader/actionheader.component';
import { BannerComponent } from './components/banner/banner.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { CartComponent } from './components/cart/cart.component';
import { NodatafoundComponent } from './components/nodatafound/nodatafound.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductComponent } from './components/product/product.component';
import { QuickviewComponent } from './components/quickview/quickview.component';
import { RegAddressComponent } from './components/reg-address/reg-address.component';
import { OtherdetailsComponent } from './components/otherdetails/otherdetails.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { CheckoutleftpanelComponent } from './components/checkoutleftpanel/checkoutleftpanel.component';
import { ReviewComponent } from './components/review/review.component';
import { ProductleftpanelComponent } from './components/productleftpanel/productleftpanel.component';
import { CartemptyComponent } from './components/cartempty/cartempty.component';
import { ConfirmEqualValidatorDirective } from './components/register/confirm-equal-validator.directive';
import { UniquePhoneValidatorsDirective } from './components/register/unique-phone-validators.directive';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LoginmenuComponent,
    ActionheaderComponent,
    BannerComponent,
    BlogComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    MyaccountComponent,
    CartComponent,
    NodatafoundComponent,
    CategoriesComponent,
    ProductComponent,
    QuickviewComponent,
    RegAddressComponent,
    OtherdetailsComponent,
    ForgetpasswordComponent,
    CheckoutleftpanelComponent,
    ReviewComponent,
    ProductleftpanelComponent,
    CartemptyComponent,
    ConfirmEqualValidatorDirective,
    UniquePhoneValidatorsDirective
   
  ],
  imports: [
    BrowserModule,
    FormsModule, //Needed
    ReactiveFormsModule, //Needed 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
