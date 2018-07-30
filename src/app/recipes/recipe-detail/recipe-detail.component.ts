import { RecipesService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipesService: RecipesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //const id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipesService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.recipesService.toShoppingList(this.recipe.ingredients);
  }
}
