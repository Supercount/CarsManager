import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private httpClient : HttpClient) { }

  private BASE_URL = "http://localhost:3000/cars";

  
  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(`${this.BASE_URL}`);
  }
  
  create(data: any): Observable<any> {
    return this.httpClient.post(`${this.BASE_URL}`, data);
  }
}
