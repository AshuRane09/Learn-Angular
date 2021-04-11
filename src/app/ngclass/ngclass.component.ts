import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css'],
})
export class NgclassComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title: string = `Ashutosh Rane`;
  myClass = {
    blue: true,
    pink: true,
    font: true,
    border: true,
    center: true,
  };
}
