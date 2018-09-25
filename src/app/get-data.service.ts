import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, throwError} from 'rxjs';
import { map } from 'rxjs/operators';
import { Idata } from './data';




@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private _url:string = "./assets/data.json";

  constructor( private http:HttpClient) { }

  getData():Observable<Idata[]>{
    return this.http.get<Idata[]>(this._url)
  }

}
