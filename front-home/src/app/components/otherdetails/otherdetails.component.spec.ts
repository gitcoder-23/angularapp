import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherdetailsComponent } from './otherdetails.component';

describe('OtherdetailsComponent', () => {
  let component: OtherdetailsComponent;
  let fixture: ComponentFixture<OtherdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
