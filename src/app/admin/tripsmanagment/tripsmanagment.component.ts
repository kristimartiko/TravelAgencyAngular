import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/trip/trip.module';
import { TripService } from 'src/app/trip/trip.service';

@Component({
  selector: 'app-tripsmanagment',
  templateUrl: './tripsmanagment.component.html',
  styleUrls: ['./tripsmanagment.component.css']
})
export class TripsmanagmentComponent implements OnInit {

  trips: Trip[] = [];
  constructor(private tripService: TripService) { }

  ngOnInit(): void {
    this.tripService.getPendingTrips().subscribe((trips: Trip[]) => {
      this.trips = trips;
    })
  }

  approveTrip(index: number) {
    this.tripService.approveTrip(this.trips[index]).subscribe(() => {});
  }

  declineTrip(index: number) {
    this.tripService.declineTrip(this.trips[index]).subscribe(() => {});
  }

}
