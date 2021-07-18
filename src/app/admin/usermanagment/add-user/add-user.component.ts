import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsermanagmentService } from '../usermanagment.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userAddForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public user: any,
  private usermanagmentService: UsermanagmentService,
  private matDialogRef: MatDialogRef<AddUserComponent>) { }

  ngOnInit(): void {
    this.userAddForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.usermanagmentService.addUser(this.userAddForm.value).subscribe(() => {
      this.matDialogRef.close(true);
    })
  }

  onClose() {
    this.matDialogRef.close(true);
  }
}
