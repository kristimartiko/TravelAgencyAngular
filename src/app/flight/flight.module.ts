export class Flight {
    public flightId: number;
    public fromPlace: String;
    public toPlace: String;
    public departureDate: Date;
    public arrivalDate: Date;

    constructor(fromPlace: String, toPlace: String, departureDate: Date, arrivalDate: Date) {
        this.fromPlace = fromPlace;
        this.toPlace = toPlace;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
    }
}