import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    // list of ingredients
    private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatos', 10),
    ];
    
    getIngredients() {
        return this.ingredients.slice(); // return a new array
    }

    // add ingredient
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.getIngredients());
    }

    // add ingredients
    addIngredients(ingredients: Ingredient[]) {
//        for (let ingr of ingredients) {
//            this.addIngredient(ingr);
//        }
        this.ingredients.push(...ingredients); // ... convierte el array en lista
        this.ingredientsChanged.emit(this.getIngredients());
    }
}
