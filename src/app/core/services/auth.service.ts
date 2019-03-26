import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get idToken(): string {
    return this._idToken;
  }
  private _idToken: string;
  get accessToken(): string {
    return this._accessToken;
  }
  private _accessToken: string;
  private _expiresAt: number;

  auth0 = new auth0.WebAuth({
    clientID: environment.auth0ClientId,
    domain: environment.auth0Domain,
    responseType: 'token id_token',
    redirectUri: environment.auth0RedirectUri,
    scope: 'openid'
  });

  constructor(private router: Router) {
    this._idToken = '';
    this._accessToken = '';
    this._expiresAt = 0;
  }

  public signup(): void {
    this.auth0.authorize({
      mode: 'signUp',
      redirectUri: window.location.href
    });
  }
  public login(): void {
    this.auth0.authorize({
      redirectUri: window.location.href
    });
  }

  public logout(): void {
    const returnTo = encodeURIComponent(environment.defaultLogoutRedirectUri);
    window.location.href = `${environment.logoutUri}?client_id=${environment.auth0ClientId}&returnTo=${returnTo}`;
  }

  private clearSession(): void {
    this._accessToken = '';
    this._idToken = '';
    this._expiresAt = 0;
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/']);
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.localLogin(authResult);
        this.router.navigate(['/']);
      }
      else if (err) {
        console.error(err);
        this.router.navigate(['/error']);
      }
    });
  }

  public renewTokens(): void {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.localLogin(authResult);
      } else if (err) {
        console.error(`Could not get a new token (${err.error}: ${err.errorDescription}).`);
        this.clearSession();
      }
    });
  }

  public isAuthenticated(): boolean {
    return new Date().getTime() < this._expiresAt;
  }

  private localLogin(authResult): void {
    localStorage.setItem('isLoggedIn', 'true');
    const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this._accessToken = authResult.accessToken;
    this._idToken = authResult.idToken;
    this._expiresAt = expiresAt;
  }
}
