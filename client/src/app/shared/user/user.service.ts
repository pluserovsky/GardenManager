import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  public API = '//localhost:8080';
  public USER_API = this.API + '/user';
  constructor(private http: HttpClient) { }

  get(id: string) {
    return this.http.get(this.USER_API + '/' + id);
  }
  save(user: any): Observable<any> {
    let result: Observable<Object>;
      result = this.http.post('//localhost:8080/register', user);
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}

