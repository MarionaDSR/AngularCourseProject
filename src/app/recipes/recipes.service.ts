import { Recipe } from './recipe.model';

export class RecipesService {
    private recipes: Recipe[] = [
		new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Recipe-575434.svg'),
		new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Recipe-575434.svg')
    ];
    
    getRecipes() {
        return this.recipes.slice(); // returns a new array
    }
}
