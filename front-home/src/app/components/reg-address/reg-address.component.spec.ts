import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegAddressComponent } from './reg-address.component';

describe('RegAddressComponent', () => {
  let component: RegAddressComponent;
  let fixture: ComponentFixture<RegAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
