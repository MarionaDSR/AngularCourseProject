import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
    // list of ingredients
    ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatos', 10),
    ];
    
    getIngredients() {
        return this.ingredients;//.slice(); // return the SAME array,to get updates
    }

    // add ingredients
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
}
