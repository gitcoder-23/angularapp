import { Directive, HostListener, OnInit } from '@angular/core';
//import { RegService } from '../views/register/register.component';

@Directive({
  selector: '[appProtectedfield]'
})
export class ProtectedfieldDirective implements OnInit {

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
    e.preventDefault();
  }

  constructor() { }

  ngOnInit() {}

}
