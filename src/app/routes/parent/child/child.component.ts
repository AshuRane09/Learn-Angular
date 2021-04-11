import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() prod: string;
  @Input() productSelected = false;
  @Output() addedProduct = new EventEmitter<any>();

  onAddProduct(): void{
    this.addedProduct.emit(this.prod);
  }

  ngOnInit(): void {}
}
