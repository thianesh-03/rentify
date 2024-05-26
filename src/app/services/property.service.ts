import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '@app/models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = 'http://localhost:3000/api'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getProperties(filters: any): Observable<Property[]> {
    const url = `${this.apiUrl}/properties`;
    return this.http.get<Property[]>(url, { params: filters });
  }

  getSellerProperties(): Observable<Property[]> {
    const url = `${this.apiUrl}/seller/properties`;
    return this.http.get<Property[]>(url);
  }

  getPropertyById(propertyId: string): Observable<Property> {
    const url = `${this.apiUrl}/properties/${propertyId}`;
    return this.http.get<Property>(url);
  }

  addProperty(propertyData: any): Observable<any> {
    const url = `${this.apiUrl}/properties`;
    return this.http.post(url, propertyData);
  }

  updateProperty(propertyId: string, propertyData: any): Observable<any> {
    const url = `${this.apiUrl}/properties/${propertyId}`;
    return this.http.put(url, propertyData);
  }

  deleteProperty(propertyId: string): Observable<any> {
    const url = `${this.apiUrl}/properties/${propertyId}`;
    return this.http.delete(url);
  }
}