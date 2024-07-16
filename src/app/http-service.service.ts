import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = `${environment.apiUrl}/stock`;

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: object) { }

  getStockItems(): Observable<any> {
    if (isPlatformBrowser(this.platformId)) {
      return this.http.get<any>(this.apiUrl);
    } else {
      console.log('Running on the server, returning empty observable for getStockItems');
      return of([]); // Devuelve un observable vacío si no está en el navegador
    }
  }

  createStockItem(item: any): Observable<any> {
    if (isPlatformBrowser(this.platformId)) {
      return this.http.post<any>(this.apiUrl, item);
    } else {
      console.log('Running on the server, returning empty observable for createStockItem');
      return of(null); // Devuelve un observable vacío si no está en el navegador
    }
  }

  getFilteredStockItems(query: string): Observable<any> {
    if (isPlatformBrowser(this.platformId)) {
      return this.http.get<any>(`${this.apiUrl}?name__icontains=${query}`);
    } else {
      console.log('Running on the server, returning empty observable for getFilteredStockItems');
      return of([]); // Devuelve un observable vacío si no está en el navegador
    }
  }

  deleteStockItem(id: number): Observable<any> {
    if (isPlatformBrowser(this.platformId)) {
      return this.http.delete<any>(`${this.apiUrl}/${id}`);
    } else {
      console.log('Running on the server, returning empty observable for deleteStockItem');
      return of(null); // Devuelve un observable vacío si no está en el navegador
    }
  }
}
