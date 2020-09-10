import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
//import { ConfirmationDialogService } from '../middlewares/confirmation-dialog/confirmation-dialog.service';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  popoverTitle = 'Popover title';
  popoverMessage = 'Popover description';
  confirmClicked = false;
  cancelClicked = false;
 
  constructor(
    private formBuilder: FormBuilder,
    //private confirmationDialogService: ConfirmationDialogService,
    ) { }
  //title = 'reactive-form-validation-in-angular8';
 
  ngOnInit() {
  
   
 
 }

 /* this.store.pipe(select(ProductSelector.selectProducts),tap((e)=>{
        console.log('sd',e)
      })).subscribe(res=>{
       
        console.log('getData->', res);
      }); */
/*  public openConfirmationDialog() {
  this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
  .then((confirmed) => console.log('User confirmed:', confirmed))
  .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
} */

 /*  getProductDetails (){
      this.productService.getProducts().subscribe(list=>{
        this.prodata = list;
        console.log("List Pro", this.prodata);
      })
    } */

}
