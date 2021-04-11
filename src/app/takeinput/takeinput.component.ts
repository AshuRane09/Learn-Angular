import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-takeinput',
  templateUrl: './takeinput.component.html',
  styleUrls: ['./takeinput.component.css'],
})
export class TakeinputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  getInput(input: any): boolean {
    console.log(input);
    return false;
  }
}
