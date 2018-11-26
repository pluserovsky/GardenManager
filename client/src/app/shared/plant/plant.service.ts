import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlantService {
  public API = '//localhost:8080/gardens/';
  constructor(private http: HttpClient) { }
	getAll(gid: string ): Observable<any> {
    return this.http.get(this.API + gid+ '/plants');
  }
  get(gid: number, pid: number) {
    return this.http.get(this.API+gid+'/plant/' +pid);
  }
  save(plant: any, gid: number): Observable<any> {
    let result: Observable<Object>;
    if (plant['href']) {
      result = this.http.put(this.API+gid+'/update-plant/'+ plant.href, plant);
    } else {
      result = this.http.post(this.API+gid+'/add-plant', plant);
    }
    return result;
  }

  remove(gid: number, pid: number) {
    return this.http.delete(this.API+ gid+"/delete-plant/"+pid);
  }
}
