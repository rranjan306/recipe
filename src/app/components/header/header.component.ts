import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() receipe = new EventEmitter<string>();
  @Output() shopping = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipe() {
    this.receipe.emit('receipe');
  }

  onShoppingList() {
    this.shopping.emit('shopping');
  }
}
