import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsermanagmentComponent } from "./admin/usermanagment/usermanagment.component";
import { LoginComponent } from "./auth/login/login.component";
import { TripComponent } from "./trip/trip.component";

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'trips', component: TripComponent},
    {path: 'login', component: LoginComponent},
    { path: 'admin', children:[
        {path:'users', component: UsermanagmentComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}