import { EventEmitter, Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

// Use @Injectable if you are going to inject a service into another service
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
      new Recipe(
        'A Test Recipe', 
        'This is a test', 
        'http://maxpixel.freegreatpicture.com/static/photo/2x/Cooking-Delicious-Korean-Food-Recipe-Asia-822090.jpg',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]),
      new Recipe(
        'Another Test Recipe', 
        'This is simply another test recipe', 
        'http://maxpixel.freegreatpicture.com/static/photo/2x/Cooking-Delicious-Korean-Food-Recipe-Asia-822090.jpg',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
        ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
      // Use .slice to return a copy of the recipes array
      return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
    }
}