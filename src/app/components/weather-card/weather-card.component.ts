import { Component, Input } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent {
  responseList: any;
  formData: any;

  constructor(
    private apiService: ApiServiceService,
    private dataService: DataServiceService
  ) {}

  ngOnInit(): void {
    this.dataService.getLatitude().subscribe((latitude: string) => {
      this.dataService.getLongitude().subscribe((longitude: string) => {
        // Check if latitude or longitude is null and assigning a lat and lon to it
        const validLat = latitude || '55.75';
        const validLon = longitude || '37.62';

        this.getWeather(validLat, validLon);
      });
    });
  }

  // Fetching Data from API
  getWeather(lat: string, lon: string) {
    this.apiService.getData(lat, lon).subscribe(
      (response: any) => {
        this.responseList = response;
        console.log(this.responseList);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
