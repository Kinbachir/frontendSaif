import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'http://localhost:8000/api/users';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  adduser(data): Observable<any> {
    const token = localStorage.getItem('currentUser')
    var HttpHeaders = new HttpHeaders();
    HttpHeaders.set('Authorization', `Bearer ${token}`);
    HttpHeaders.set('accept', `application/json`);
    var header = {headers:HttpHeaders}
    return this.http.post(url, data,header);
  }
  edituser(id, data): Observable<any> {
    const token = localStorage.getItem('currentUser')
    var HttpHeaders = new HttpHeaders();
    HttpHeaders.set('Authorization', `Bearer ${token}`);
    HttpHeaders.set('accept', `application/json`);
    var header = {headers:HttpHeaders}
    return this.http.put(`${url}/${id}`, data,header);
  }
  deleteuser(id): Observable<any> {
    const token = localStorage.getItem('currentUser')
    var HttpHeaders = new HttpHeaders();
    HttpHeaders.set('Authorization', `Bearer ${token}`);
    HttpHeaders.set('accept', `application/json`);
    var header = {headers:HttpHeaders}
    return this.http.delete(`${url}/${id}`, header);
  }
  getuser(id): Observable<any> {
    const token = localStorage.getItem('currentUser')
    var HttpHeaders = new HttpHeaders();
    HttpHeaders.set('Authorization', `Bearer ${token}`);
    HttpHeaders.set('accept', `application/json`);
    var header = {headers:HttpHeaders}
    return this.http.get(`${url}/${id}`, header);
  }
  getAllusers(): Observable<any> {
    const token = localStorage.getItem('currentUser')
    var header = {headers:new HttpHeaders({'Authorization':`Bearer ${token}`,'accept':`application/json`})}
    return this.http.get(`${url}`, header);
  }
}