import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Resort } from '../models/resort.modal';

@Injectable({
  providedIn: 'root'
})
export class ResortService {
  private resortsUrl = 'assets/json/resorts-data.json';

  constructor(private http: HttpClient) {}

  getResorts(): Observable<Resort[]> {
    return this.http.get<Resort[]>(this.resortsUrl);
  }
}