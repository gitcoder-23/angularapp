import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmininfoComponent } from './admininfo.component';

describe('AdmininfoComponent', () => {
  let component: AdmininfoComponent;
  let fixture: ComponentFixture<AdmininfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmininfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmininfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
