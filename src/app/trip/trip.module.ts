import { User } from "../auth/user.module";
import { TripStatusEnum } from "../shared/tripStatusEnum.module";

export class Trip {
    public tripId: number;
    public tripReason: String;
    public tripDescription: String;
    public fromPlace: String;
    public toPlace: String;
    public departureDate: Date;
    public arrivalDate: Date;
    public user: User;
    public status: TripStatusEnum

    public Trip(tripReason: String, tripDescription: String, fromPlace: String, toPlace: String, departureDate: Date, arrivalDate: Date) {
        this.tripReason = tripReason;
        this.tripDescription = tripDescription;
        this.fromPlace = fromPlace;
        this.toPlace = toPlace;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
    }
}