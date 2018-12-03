import {Injectable} from '@angular/core';


const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable()
export class TokenStorage {
  private role: string;

  constructor() {
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(username: string) {
    window.localStorage.removeItem(USERNAME_KEY);
    window.localStorage.setItem(USERNAME_KEY, username);
  }


  public saveAuthorities(authorities: string[]) {
    window.localStorage.removeItem(AUTHORITIES_KEY);
    window.localStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string {
    this.role;

    if (localStorage.getItem(TOKEN_KEY)) {
      JSON.parse(localStorage.getItem(AUTHORITIES_KEY)).map(authority => {
        this.role = authority.authority;
      });
    }

    return this.role;
  }
}




