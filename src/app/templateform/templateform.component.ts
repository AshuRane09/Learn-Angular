import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }
  @ViewChild('myForm') myForm: NgForm;
  defaultCourse = 'Angular';
  username: string;
  ngOnInit(): void {
  }

  onSubmit(form): void{
    console.log(form);
  }
  onSubmitviewChild(): void{
    console.log(this.myForm);
  }
}
