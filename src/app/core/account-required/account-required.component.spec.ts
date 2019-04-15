import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRequiredComponent } from './account-required.component';

describe('AccountRequiredComponent', () => {
  let component: AccountRequiredComponent;
  let fixture: ComponentFixture<AccountRequiredComponent>;

  beforeEach(async(() => {
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
