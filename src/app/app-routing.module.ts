import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "./admin/admin-guard.ervice";
import { TripsmanagmentComponent } from "./admin/tripsmanagment/tripsmanagment.component";
import { UsermanagmentComponent } from "./admin/usermanagment/usermanagment.component";
import { LoginComponent } from "./auth/login/login.component";
import { FlightComponent } from "./flight/flight.component";
import { HomeComponent } from "./home/home.component";
import { TripComponent } from "./trip/trip.component";

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'trips', component: TripComponent},
    {path: 'login', component: LoginComponent},
    { path: 'admin', canActivate: [AdminGuard], children:[
        {path:'users', component: UsermanagmentComponent},
        {path:'trips', component: TripsmanagmentComponent}
    ]},
    {path: 'flights', component: FlightComponent},
    {path: 'home', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}