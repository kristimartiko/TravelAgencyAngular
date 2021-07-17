import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from './trip.module';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http : HttpClient) { }

  getTrips() {
    return this.http.get<Trip[]>("http://localhost:8787/trips"); 
  }

  getApprovedTrips() {
    return this.http.get<Trip[]>("http://localhost:8787/approvedTrips");
  }

  createTrip(formValue: any): Observable<Trip>{
    return this.http.post<Trip>("http://localhost:8787/createTrip", formValue);
  }

  updateTrip(t: Trip) {
    return this.http.put<Trip>(`http://localhost:8787/updateTrip${t.tripId}`, t);
  }

  deleteTrip(t: Trip) {
    return this.http.delete(`http://localhost:8787/deleteTrip${t.tripId}`);
  } 

  sendApproval(t: Trip) {
    return this.http.get(`http://localhost:8787/sendApproval${t.tripId}`);
  }

  getStatus(t: Trip) {
    return this.http.get(`http://localhost:8787/status${t.tripId}`);
  }
}
