import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutleftpanelComponent } from './checkoutleftpanel.component';

describe('CheckoutleftpanelComponent', () => {
  let component: CheckoutleftpanelComponent;
  let fixture: ComponentFixture<CheckoutleftpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutleftpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutleftpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
