import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private   apiURL = 'https://pixabay.com/api/';
private  apiKey = '28696198-e716d029c7345f28bd166cb54';
  //private apiURL = 'https://api.example.com/data'; // Replace with your API endpoint
 // private apiKey = 'YOUR_API_KEY'; // Replace with your API key (if required)

  constructor(private http: HttpClient) { }
  getData(searchText: string, amount: number): Observable<any> {
    const url = `${this.apiURL}/?key=${this.apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`;
    return this.http.get<any>(url);
  }

}
