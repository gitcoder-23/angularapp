import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantitylistComponent } from './quantitylist.component';

describe('QuantitylistComponent', () => {
  let component: QuantitylistComponent;
  let fixture: ComponentFixture<QuantitylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantitylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantitylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
