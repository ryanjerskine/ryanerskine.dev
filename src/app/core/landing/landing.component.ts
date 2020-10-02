import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  currentYear = new Date().getFullYear();
  devStartYear = Math.abs(2008 - this.currentYear);

  constructor(public auth: AuthService) { }

  ngOnInit(): void { }

  contactMe(): void {
    alert('Not yet implemented.');
  }
}
