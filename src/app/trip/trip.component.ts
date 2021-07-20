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
  
  constructor(private tripService: TripService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.tripService.getTrips().subscribe((trips: Trip[]) => {
      this.trips = trips;
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
      window.location.reload();
    });
  }

  addFlight(index: number) {
    this.tripService.addFlight(this.trips[index]).subscribe(() => {});
  }

  isEmpty() {
    if(this.trips.length == 0) {
      return true;
    } else return false;
  }

  isCreated(index: number) {
    if("CREATED" == this.trips[index].status) {
      return true;
    } return false;
  }

  isApproved(index: number) {
    if("APPROVED" == this.trips[index].status) {
      return true;
    }
    return false;
  }
}
