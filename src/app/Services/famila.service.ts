// familia.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Familia } from '../Models/familia.model';

@Injectable({
  providedIn: 'root',
})
export class FamiliaService {
  private apiUrl = 'http://localhost:3000/verosApi/v1/familias';

  constructor(private http: HttpClient) {}

  createFamilia(familia: Familia): Observable<Familia> {
    return this.http.post<Familia>(this.apiUrl, familia);
  }

  getAllFamilias(): Observable<Familia[]> {
    return this.http.get<Familia[]>(this.apiUrl);
  }

  getFamiliaById(id: number): Observable<Familia> {
    return this.http.get<Familia>(`${this.apiUrl}/${id}`);
  }

  removeFamilia(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}