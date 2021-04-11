import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css'],
})
export class NgifComponent implements OnInit {
  constructor() {}
  isValid: boolean = false;
  ngOnInit(): void {}
  onCreateBlock(): boolean {
    this.isValid = !this.isValid;
    return false;
  }
}
