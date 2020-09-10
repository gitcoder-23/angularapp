import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthGuard } from './services/auth/auth.guard.service';
import { RedirectorService } from './services/auth/auth.redirector.service';
import { SampleComponent } from './sample/sample.component';
import { ResetpasswordComponent } from './views/resetpassword/resetpassword.component';
import { OtpComponent } from './views/otp/otp.component';
import { ForgetpasswordComponent } from './views/forgetpassword/forgetpassword.component';
// import { DashboardModule } from './views/dashboard/dashboard.component';



export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'resetpassword',
    component: ResetpasswordComponent,
    data: {
      title: 'Reset Password'
    }
  },

  {
    path: 'forgetpassword',
    component: ForgetpasswordComponent,
    data: {
      title: 'Forget Password'
    }
  },

  {
    path: 'otp',
    component: OtpComponent,
    data: {
      title: 'OTP'
    }
  },

  {
    path: 'sample',
    component: SampleComponent,
    data: {
      title: 'Sample'
    }
  },
 
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[RedirectorService],
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate:[RedirectorService],
    data: {
      title: 'Register Page'
    }
  },
  
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate:[AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      /* {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      }, */
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      /* {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      }, */
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },

  
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
