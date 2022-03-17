import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService <T extends {id: number}> {

  apiUrl: string = environment.apiUrl;
  entity: string = 'constructions'

  constructor(private http: HttpClient) { }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/${this.entity}`)
  }

  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${this.entity}/${id}`)
  }

  update(data: T): Observable<T> {
    return this.http.patch<T>(`${this.apiUrl}/${this.entity}/${data.id}`, data)
  }

  delete(data: T): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${this.entity}/${data.id}`)
  }

  create(data: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${this.entity}`, data)
  }
}
