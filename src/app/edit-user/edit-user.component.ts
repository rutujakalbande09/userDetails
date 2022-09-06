import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { UserInfocElement } from '../user-table/user-table.component';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  faXmark = faXmark;
  editUserForm!: FormGroup;
  constructor(public fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public enqDataRecevied: UserInfocElement) { }

  ngOnInit(): void {
    this.editUserForm = this.fb.group({
      name: [this.enqDataRecevied.name,],
      email: [this.enqDataRecevied.email,],
      gender: [this.enqDataRecevied.gender,],
      dob: [this.enqDataRecevied.DOB,],
      address: [this.enqDataRecevied.address,]
    });
  }
  submit(){}

}
