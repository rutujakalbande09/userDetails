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

//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
//   { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
//   { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
//   { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
//   { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
//   { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
//   { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
//   { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
//   { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
//   { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
//   { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
// ];


//   displayedColumns: string[] = ['name', 'email', 'gender', 'address', 'DOB'];
//   dataSource = new MatTableDataSource<UserInfo>(userData);

//   @ViewChild(MatPaginator)
//   paginator!: MatPaginator;
//   constructor() { }

//   ngOnInit(): void {
//     this.dataSource.paginator = this.paginator;
//   }

// }
// export interface UserInfo {
//   name: string;
//   email: string;
//   gender: string;
//   address: string;
//   DOB: string;
// }
// const userData: UserInfo[] = [
//   { name: 'Sew Joen', email: 'sewjoen@gmail.com', gender: 'male', address: '471 Duncan Avenue,New York', DOB: '5/4/1980' },
//   { name: 'John Doe', email: 'johndeo@gmail.com', gender: 'female', address: '977 Hartway,street SD', DOB: '9/1/1988' },
//   { name: 'Rose Smith', email: 'rosesmith@gmail.com', gender: 'female', address: '4579 Huntz Lane OH ', DOB: '5/4/1949' },
//   { name: 'Droid Chew', email: 'droid.chew@gmail.com', gender: 'male', address: '4209 Green Acres Road,TN', DOB: '2/22/1960' },
//   { name: 'Deo Rosa ', email: 'deo.rosa@gmail.com', gender: 'male', address: '2913 Barnes  Dunc Avenue,OH ', DOB: '5/18/1980' },

// ];