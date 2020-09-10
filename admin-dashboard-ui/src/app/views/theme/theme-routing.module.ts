import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AdmininfoComponent } from './admininfo/admininfo/admininfo.component';
import { MyinfoComponent } from './shoperInfo/myinfo.component';
import { ProductComponent } from './productinfo/product/product.component'
import { ShopperlistComponent } from './shoperInfo/shopperlist.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomeraddComponent } from './customer/customeradd.component';
import { ProductlistComponent } from './productinfo/productlist.component';
import { BanneraddComponent } from './banner/banneradd.component';
import { SettingsComponent } from './settings/settings.component';
import { CategoryaddComponent } from './category/categoryadd.component';
import { CategorylistComponent } from './category/categorylist.component';
import { ResetPassComponent } from './resetpass/resetpass.component';
import { QuantityComponent } from './quantity/quantity/quantity.component';
import { QuantitylistComponent } from './quantity/quantitylist/quantitylist.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Theme'
    },
    children: [
     
      {
        path: '',
        redirectTo: 'product'
      },

      {
        path: 'product',
        component: ProductComponent,
        data: {
          title: 'Product'
        }
      },
      {
        path: 'product/edit/:pid',
        component: ProductComponent,
        data: {
          title: 'Product'
        }
      },
      {
        path: 'myinfo',
        component: MyinfoComponent,
        data: {
          title: 'Myinfo'
        }
      },

      {
        path: 'myinfo/:u_id',
        component: MyinfoComponent,
        data: {
          title: 'Myinfo'
        }
      },

      {
        path: 'shopperlist',
        component: ShopperlistComponent,
        data: {
          title: 'Shopperlist'
        }
      },

      {
        path: 'customer',
        component: CustomerComponent,
        data: {
          title: 'Customer'
        }
      },
      {
        path: 'customeradd',
        component: CustomeraddComponent,
        data: {
          title: 'Customeradd'
        }
      },



      {
        path: 'productlist',
        component: ProductlistComponent,
        data: {
          title: 'Productlist'
        }
      },
      {
        path: 'quantity',
        component: QuantityComponent,
        data: {
          title: 'Quantity'
        }
      },

      {
        path: 'quantitylist',
        component: QuantitylistComponent,
        data: {
          title: 'Quantitylist'
        }
      },
      {
        path: 'categoryadd',
        component: CategoryaddComponent,
        data: {
          title: 'Categoryadd'
        }
      },


      {
        path: 'categoryadd/edit/:cat_id',
        component: CategoryaddComponent,
        data: {
          title: 'Categoryedit'
        }
      },
      {
        path: 'categorylist',
        component: CategorylistComponent,
        data: {
          title: 'Categorylist'
        }
      },


      {
        path: 'banneradd',
        component: BanneraddComponent,
        data: {
          title: 'Banner'
        }
      },

      {
        path: 'admininfo',
        component: AdmininfoComponent,
        data: {
          title: 'Admin'
        }
      },
      {
        path: 'settings',
        component: SettingsComponent,
        data: {
          title: 'Settings'
        }
      },

      {
        path: 'resetpass',
        component: ResetPassComponent,
        data: {
          title: 'Resetpass'
        }
      }

     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
