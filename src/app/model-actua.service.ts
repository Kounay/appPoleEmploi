import { IModelActua } from './modelActua';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelActuaService {
  // tslint:disable-next-line: variable-name
  private _url = '/assets/data/modelActua.json';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getModelActua(): Observable<IModelActua[]> {
    return this.http.get<IModelActua[]>(this._url);
  }
}
