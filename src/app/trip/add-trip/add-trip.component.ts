import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    private matDialogRef: MatDialogRef<AddTripComponent>) {
      console.log('test') }

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
    console.log(this.tripAddForm.value)
    console.log(this.tripAddForm)
    this.tripService.addTrip(this.tripAddForm.value).subscribe(() => {
      this.matDialogRef.close(true);
    })
  }

  onClose() {
    this.matDialogRef.close(true);
  }

}
