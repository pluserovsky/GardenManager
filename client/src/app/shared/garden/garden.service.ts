import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GardenService {
  public API = '//localhost:8080/';

  constructor(private http: HttpClient) {
  }

  getAll(username: string): Observable<any> {
    return this.http.get(this.API + username + '/gardens');
  }

  get(username: string, id: string) {
    return this.http.get(this.API + username + "/get-garden/" + id);
  }

  save(garden: any, username: string): Observable<any> {
    let result: Observable<Object>;
    if (garden['href']) {
      result = this.http.put(this.API + username + "/update-garden/" + garden.href, garden);
    } else {
      result = this.http.post(this.API + username + '/add-gardens', garden);
    }
    return result;
  }

  remove(id: string, username: string) {
    return this.http.delete(this.API + username + '/delete-garden/' + id);
  }
}

