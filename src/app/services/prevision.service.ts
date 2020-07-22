import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Prevision  from '../entities/prevision'
import data from '../const';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export default class PrevisionService {

  constructor(private http: HttpClient) { }

  getPrevisions(): Observable<Prevision[]>{
    return this.http.get<Prevision[]>(`${data.API_URL}/previsions`);
  }
}
