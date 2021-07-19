import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from './trip.module';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) { }

  getTrips()  {
    return this.http.get("http://localhost:8787/trips");
  }

  getApprovedTrips() {
    return this.http.get("http://localhost:8787/approvedTrips");
  }

  updateTrip(trip: Trip) {
    return this.http.put(`http://localhost:8787/updateTrip${trip.tripId}`, trip);
  }

  addTrip(trip: Trip) {
    console.log(trip);
    return this.http.post("http://localhost:8787/createTrip", trip);
  }

  deleteTrip(trip: Trip) {
    console.log(trip);
    return this.http.delete(`http://localhost:8787/deleteTrip${trip.tripId}`);
  }

  sendApprove(trip: Trip) {
    return this.http.get(`http://localhost:8787/sendApproval${trip.tripId}`);
  }

  addFlight(trip: Trip) {
    return this.http.post(`http://localhost:8787/addFlight${trip.tripId}`, trip);
  } 

  getPendingTrips() {
    return this.http.get("http://localhost:8787/pendingTrips");
  }

  approveTrip(trip: Trip) {
    return this.http.get(`http://localhost:8787/approveTrip${trip.tripId}`);
  }

  declineTrip(trip: Trip) {
    return this.http.get(`http://localhost:8787/declineTrip${trip.tripId}`);
  }

  getStatus(trip: Trip) {
    return this.http.get(`http://localhost:8787/status${trip.tripId}`);
  }
}
