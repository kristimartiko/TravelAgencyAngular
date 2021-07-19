import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTripComponent } from './add-trip/add-trip.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { Trip } from './trip.module';
import { TripService } from './trip.service';


@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  trips: Trip[] = [];
  approvedTrips: Trip[] = [];
  
  constructor(private tripService: TripService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.tripService.getTrips().subscribe((trips: Trip[]) => {
      this.trips = trips;
    })
    this.tripService.getApprovedTrips().subscribe((trips: Trip[]) => {
      this.approvedTrips = trips;
    })
  }

  editTrip(trip: Trip) {
    let dialogRef = this.dialog.open(EditTripComponent, {
      width: '40%',
      data: trip
    });

    dialogRef.afterClosed().subscribe((change) => {
      if(change) {
        this.tripService.getTrips().subscribe((trips: Trip[]) => {
          this.trips = trips;
        })
      }
    })
  }

  newTrip() {
    let dialogRef = this.dialog.open(AddTripComponent, {
      width: '40%'
    });
    
    dialogRef.afterClosed().subscribe((change) => {
      if(change) {
        this.tripService.getTrips().subscribe((trips: Trip[]) => {
          this.trips = trips;
        })
      }
    })
  }

  deleteTrip(index: number) {
    this.tripService.deleteTrip(this.trips[index]).subscribe(() => {
      this.trips.splice(index, 1);
    });
  }

  sendApprove(index: number) {
    this.tripService.sendApprove(this.trips[index]).subscribe(() => {
      this.trips.splice(index, 1);
    });
  }

  addFlight(index: number) {
    this.tripService.addFlight(this.approvedTrips[index]).subscribe(() => {});
  }
}
