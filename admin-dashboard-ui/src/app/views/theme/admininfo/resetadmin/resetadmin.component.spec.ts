import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetadminComponent } from './resetadmin.component';

describe('ResetadminComponent', () => {
  let component: ResetadminComponent;
  let fixture: ComponentFixture<ResetadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
