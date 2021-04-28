import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccountRequiredComponent } from './account-required.component';

describe('AccountRequiredComponent', () => {
  let component: AccountRequiredComponent;
  let fixture: ComponentFixture<AccountRequiredComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountRequiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
