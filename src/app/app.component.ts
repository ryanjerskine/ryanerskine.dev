import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'website';

  constructor(private auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.auth.renewTokens();
    }
  }
}
