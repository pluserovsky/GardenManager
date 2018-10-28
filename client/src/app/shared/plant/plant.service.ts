import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlantService {
  public API = '//localhost:8080';
  public PLANT_API = this.API + '/plants';
  constructor(private http: HttpClient) { }
	getAll(id: string): Observable<any> {
    return this.http.get('//localhost:8080/gardens/' + id+ '/plants');
  }
  get(id: string) {
    return this.http.get(this.PLANT_API + '/' + id);
  }
  save(plant: any): Observable<any> {
    let result: Observable<Object>;
    if (plant['href']) {
      result = this.http.put(plant.href, plant);
    } else {
      result = this.http.post(this.PLANT_API, plant);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
