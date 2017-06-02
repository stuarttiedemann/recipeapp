import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
      new Recipe('A Test Recipe', 'This is simply a test', 'http://maxpixel.freegreatpicture.com/static/photo/2x/Cooking-Delicious-Korean-Food-Recipe-Asia-822090.jpg'),
      new Recipe('Another Test Recipe', 'This is simply another test recipe', 'http://maxpixel.freegreatpicture.com/static/photo/2x/Cooking-Delicious-Korean-Food-Recipe-Asia-822090.jpg')
    ];

    getRecipes() {
      // Use .slice to return a copy of the recipes array
      return this.recipes.slice();
    }
}