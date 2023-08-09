import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private longitudeSource = new BehaviorSubject<string>('');
  private latitudeSource = new BehaviorSubject<string>('');

  constructor() {}

  setLongitude(longitude: string) {
    this.longitudeSource.next(longitude);
  }

  setLatitude(latitude: string) {
    this.latitudeSource.next(latitude);
  }

  getLongitude(): Observable<string> {
    return this.longitudeSource.asObservable();
  }

  getLatitude(): Observable<string> {
    return this.latitudeSource.asObservable();
  }
}
