import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = `${environment.apiUrl}/api/stock`;

  constructor(private http: HttpClient) { }

  getStockItems(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  createStockItem(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  getFilteredStockItems(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?name__icontains=${query}`);
  }

  deleteStockItem(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
