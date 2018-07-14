import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	showTab: string = "recipes";

	onRecipesChoiced() {
		this.showTab = "recipes";
	}

	onShoppingListChoiced() {
		this.showTab = "shoppingList";
	}
}
