import { AuthService } from './../services/auth.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { LandingComponent } from './landing.component';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCard } from '@angular/material/card';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatMenuModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        LandingComponent,
        MockComponent(MatButton),
        MockComponent(MatIcon),
        MockComponent(MatToolbar),
        MockComponent(MatToolbarRow),
        MockComponent(MatCard)
      ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
