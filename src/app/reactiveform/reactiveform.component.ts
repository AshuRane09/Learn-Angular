import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() {}
  myReactiveForm: FormGroup;
  notAllowedNames = ['Ashu', 'Nidhi'];

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      userDetails: new FormGroup({
        username: new FormControl(null, [Validators.required, this.NANames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email])
      }),
      course: new FormControl(null),
      skills: new FormArray([
        new FormControl(null, Validators.required)
      ])
    });
  }

  onSubmit(): void{
    console.log(this.myReactiveForm);
  }

  onAddSkills(): void{
    const control = new FormControl(null, Validators.required);
    (this.myReactiveForm.get('skills') as FormArray).push(control);
  }

  NANames(control: FormControl): any{
    if (this.notAllowedNames.indexOf(control.value) !== -1){
      return {nameNotAllowed: true};
    }
    return null;
  }
}
