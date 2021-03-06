import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  tripAddForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public trip: any,
   private tripService: TripService,
    private matDialogRef: MatDialogRef<AddTripComponent>,
    private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.tripAddForm = new FormGroup({
      'tripReason': new FormControl(null, Validators.required),
      'tripDescription': new FormControl(null, Validators.required),
      'fromPlace': new FormControl(null, Validators.required),
      'toPlace': new FormControl(null, Validators.required),
      'departureDate': new FormControl(null, Validators.required),
      'arrivalDate': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if(this.tripAddForm.controls['arrivalDate'].value <= this.tripAddForm.controls['departureDate'].value) {
      this.snackBar.open("Arrival Date can not be before or the same date Departure Date!", '', {
        duration: 3000
      });
    } else {
    this.tripService.addTrip(this.tripAddForm.value).subscribe(() => {
      this.matDialogRef.close(true);
    });
    this.snackBar.open('You Added A New Trip In The List', '', {
      duration: 3000
    });
    }
  }

  onClose() {
    this.matDialogRef.close(true);
  }

}
