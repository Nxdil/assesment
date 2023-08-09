import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { UnixTimestampToDatePipe } from './pipe/unix-timestamp-to-date.pipe';
import { UnixTimestampToDateAndTimePipe } from './pipe/unix-timestamp-to-date-and-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ReactiveFormComponent,
    WeatherCardComponent,
    UnixTimestampToDatePipe,
    UnixTimestampToDateAndTimePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
