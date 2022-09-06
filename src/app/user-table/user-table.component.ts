import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { DeleteuserComponent } from '../deleteuser/deleteuser.component';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
 displayedColumns: string[] = ['name', 'email', 'gender', 'address', 'DOB',];
  dataSource = new MatTableDataSource<UserInfocElement>(ELEMENT_DATA);
  faBars = faBars;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(public dialog: MatDialog, ) { }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  openUserEdit(element: UserInfocElement){
    console.log(element.name);
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '300px',
      data:element
      
    });  
  }
  openUserDelete() {
    const dialogRef = this.dialog.open(DeleteuserComponent, {
      width: '450px',

    });
  
  }
 }

export interface UserInfocElement {
  name: string;
  email: string;
  gender: string;
  address: string;
  DOB: string;
 }

  const ELEMENT_DATA: UserInfocElement[] = [
   { name: 'Kit Joen', email: 'sewjoen@gmail.com', gender: 'male', address: '471 Duncan Avenue,New York', DOB: '5/4/1980',},
  { name: 'John Doe', email: 'johndeo@gmail.com', gender: 'female', address: '977 Hartway,street SD', DOB: '9/1/1988' },
{ name: 'Rose Smith', email: 'rosesmith@gmail.com', gender: 'female', address: '4579 Huntz Lane OH ', DOB: '5/4/1949' },
{ name: 'Droid Chew', email: 'droid.chew@gmail.com', gender: 'male', address: '4209 Green Acres Road,TN', DOB: '2/22/1960' },
{ name: 'Deo Rosa ', email: 'deo.rosa@gmail.com', gender: 'male', address: '2913 Barnes  Dunc Avenue,OH ', DOB: '5/18/1980' },



  ];

