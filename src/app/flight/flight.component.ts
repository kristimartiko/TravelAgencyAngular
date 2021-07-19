import { Component, OnInit } from '@angular/core';
import { Flight } from './flight.module';
import { FlightService } from './flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  flights: Flight[] = [];
  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flightService.getFlights().subscribe((flights: Flight[]) => {
      this.flights = flights;
    })
  }

}
