import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    // returns a copy of the ingredients array
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    // push the new ingredient onto the ingredients array
    this.ingredients.push(ingredient);
    // broadcast a copy of the newly updated ingredients array
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // Use a es6 spread operator to convert ingredients array into a list and push all of them at the same time
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}