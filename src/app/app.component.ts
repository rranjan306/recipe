import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipe';
  header: string = 'receipe';

  onRecipe(header: string) {
    this.header = header;
  }

  onShopping(header: string) {
    this.header = header;
  }
}
