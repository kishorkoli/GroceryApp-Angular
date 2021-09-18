import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor() { }

 private ingredients : Ingredient[] = [
    new Ingredient("Mango", 100),
    new Ingredient("Onion", 70),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient : Ingredient) {
  //  console.log(this.ingredients);
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());   
  }

  addAllIngredients(ingredients : Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
