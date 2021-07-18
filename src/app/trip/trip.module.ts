export class Trip {
    public tripId: number;
    public tripReason: string;
    public tripDescription: string;
    public fromPlace: string;
    public toPlace: string;
    public departureDate: Date;
    public arrivalDate: Date;
    public user_id: number;

    constructor(tripReason: string, tripDescription: string, fromPlace: string, toPlace: string, departureDate: Date, arrivalDate: Date) {
        this.tripReason = tripReason;
        this.tripDescription = tripDescription;
        this.fromPlace = fromPlace;
        this.toPlace = toPlace;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
    }
}