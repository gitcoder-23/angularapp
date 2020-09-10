import {Component, OnInit} from '@angular/core';
import { navItems } from '../../_nav';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner"; //For Spinner



@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private user:AuthService, 
              private route:Router, private spinner: NgxSpinnerService,
              private toastr: ToastrService){}

  ngOnInit() {

    this.spinnerFunction();
                
  }

  spinnerFunction(){
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }
  
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout(){
    this.user.Logout().subscribe(
      (success)=>{
         //Alert msg
      this.toastr.info('You are exiting from dashboard', 'Logout Successfully', {
        timeOut: 1000,
        progressBar: false
  
      })

        this.route.navigate(['/login']);
      }
    )
  }
}
