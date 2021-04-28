import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RequestAccessComponent } from './request-access.component';

describe('RequestAccessComponent', () => {
  let component: RequestAccessComponent;
  let fixture: ComponentFixture<RequestAccessComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
