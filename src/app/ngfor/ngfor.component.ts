import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor(private router: Router) { }
  users: any = [];
  placeH = 'Enter Name';
  createUser(uname: any): boolean{
    this.users.push({
      name : uname.value
    });
    if (this.users.length > 3){
      this.router.navigate(['products']);
    }
    uname.value = ' ';
    return false;
  }
  removeLast(): boolean{
    this.users.splice(this.users.length - 1, 1);
    return false;
  }
  removeUser(item: number): boolean{
    this.users.splice(item, 1);
    return false;
  }

  ngOnInit(): void {
  }
}
