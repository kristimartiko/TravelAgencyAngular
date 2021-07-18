import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/auth/user.module';
import { AddUserComponent } from './add-user/add-user.component';
import { UsermanagmentService } from './usermanagment.service';

@Component({
  selector: 'app-usermanagment',
  templateUrl: './usermanagment.component.html',
  styleUrls: ['./usermanagment.component.css']
})
export class UsermanagmentComponent implements OnInit {

  users: User[] = [];

  constructor(private usermanagmantService: UsermanagmentService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.usermanagmantService.getUsers().subscribe((response: User[]) => {
      this.users = response;
    });  
  }

  newUser() {
    let dialogRef = this.dialog.open(AddUserComponent, {
      width: '40%'
    });

    dialogRef.afterClosed().subscribe((change) => {
      if(change) {
        this.usermanagmantService.getUsers().subscribe((users : User[]) => {
          this.users = users;
        })
      }
    })
  }

}
