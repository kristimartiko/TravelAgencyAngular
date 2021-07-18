import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Trip } from '../trip.module';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {

  tripEditForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public trip: Trip,
  private tripService: TripService,
  private matdialogRef: MatDialogRef<EditTripComponent>) { }

  ngOnInit(): void {
    this.tripEditForm = new FormGroup({
      'tripReason': new FormControl(this.trip.tripReason, Validators.required),
      'tripDescription': new FormControl(this.trip.tripDescription, Validators.required),
      'fromPlace': new FormControl(this.trip.fromPlace, Validators.required),
      'toPlace': new FormControl(this.trip.toPlace, Validators.required),
      'departureDate': new FormControl(this.trip.departureDate, Validators.required),
      'arrivalDate': new FormControl(this.trip.arrivalDate, Validators.required),
      'tripId': new FormControl(this.trip.tripId, Validators.required)
    });
  }

  onSubmit() {
    this.tripService.updateTrip(this.tripEditForm.value).subscribe(() => {
      this.matdialogRef.close(true);
    })
  }

  onClose() {
    this.matdialogRef.close(true);
  }

}
