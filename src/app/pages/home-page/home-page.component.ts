import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {

  constructor(private apiService: ApiServiceService) {
  }
  // responseList : any;

  // lat = "51.485927"
  // lon = "0.24995"
  
  ngOnInit(): void {
    
  }

  // getWeather(lat: string, lon: string){

  //   this.apiService.getData(this.lat,this.lon).subscribe((response: {}) => {

  //     this.responseList = response
  //     console.log(this.responseList);
  //     console.log(response);
      
      
  //   });
  // }
}
