import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  constructor(private fb: FormBuilder, private dataService: DataServiceService) {
  }

  geoForm = this.fb.group({
    longitude: ['', [Validators.required]],
    latitude: ['', [Validators.required]]
  });
  

  
  ngOnInit(): void {
  }

  onSubmit() {
    if (this.geoForm.valid) {
      const longitude = this.geoForm.value.longitude!;
      const latitude = this.geoForm.value.latitude!;

      this.dataService.setLongitude(longitude);
      this.dataService.setLatitude(latitude);
      
    }
  }

}
