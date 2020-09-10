import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/***********All Components are linked here***** */
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
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
/***********All Components are linked here end***** */


const routes: Routes = [

//{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '', component: HomeComponent, pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'blog', component: BlogComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'checkout', component: CheckoutComponent },
{ path: 'myaccount', component: MyaccountComponent },
{ path: 'cart', component: CartComponent },
{ path: 'categories', component: CategoriesComponent },
{ path: 'product', component: ProductComponent },
{ path: 'quickview', component: QuickviewComponent },
{ path: 'reg-address', component: RegAddressComponent },
{ path: 'otherdetails', component: OtherdetailsComponent },
{ path: 'forgetpassword', component: ForgetpasswordComponent },
{ path: 'checkoutleftpanel', component: CheckoutleftpanelComponent },
{ path: 'review', component: ReviewComponent },
{ path: 'productleftpanel', component: ProductleftpanelComponent },
{ path: 'cartempty', component: CartemptyComponent },
{ path: '**', component: NodatafoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
