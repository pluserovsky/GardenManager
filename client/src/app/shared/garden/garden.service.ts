import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GardenService {
  public API = '//localhost:8080';
  public GARDEN_API = this.API + '/gardens';
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/serve-gardens');
  }
  get(id: string) {
    return this.http.get(this.GARDEN_API + '/' + id);
  }
  save(garden: any): Observable<any> {
    let result: Observable<Object>;
    if (garden['href']) {
      result = this.http.put(garden.href, garden);
    } else {
      result = this.http.post(this.GARDEN_API, garden);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
