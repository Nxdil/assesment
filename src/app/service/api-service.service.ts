import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {


  // Add keys to env file
  API_URL = "https://api.openweathermap.org/data/2.5/weather?"
  API_KEY = "7a521b1ff6285fe7eabed9cc90b77148"

  

  constructor(private http: HttpClient) { }

  getData(lat: string, lon: string): Observable<any> {    
    return this.http
      .get<any>(`${this.API_URL}lat=${lat}&lon=${lon}&appid=${this.API_KEY}`)

      // `${environment.API_BASE_URL}/group?id=${cityCodes}&units=metric&appid=${environment.API_KEY}`
      
  }

  
}
