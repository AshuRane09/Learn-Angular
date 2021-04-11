import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  selProduct: string;
  proSelected = false;
  addedProduct: any;

  onProductSelect( product): void{
    this.proSelected = true;
    this.selProduct = product;
  }

  onAddedProduct(event): void{
    this.addedProduct = event;
  }

  ngOnInit(): void {}
}
