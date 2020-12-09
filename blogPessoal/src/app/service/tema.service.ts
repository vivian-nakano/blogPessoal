import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }

  getAllTemas() : Observable<Tema[]>{
    return this.http.get<Tema[]>('htttp://localhost:8080/tema', this.token)
  }

  getByIdTema(id: number) {
    return this.http.get(`http://localhost:8080/tema/{$id}`, this.token)
  }
}
