import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
	@Output() addedIngredient = new EventEmitter<Ingredient>();
	@ViewChild('nameInput') nameInputRef: ElementRef;
	@ViewChild('amountInput') amountInputRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
  	const ingName = this.nameInputRef.nativeElement.value;
  	const ingAmount = this.amountInputRef.nativeElement.value;
  	const newIngredient = new Ingredient(ingName, ingAmount);
  	this.addedIngredient.emit(newIngredient);
  }

}
