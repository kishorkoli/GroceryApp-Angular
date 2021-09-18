import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private slService : ShoppingListService) { }

  selectedRecipe = new EventEmitter<Recipe>();

  private recipes : Recipe[] = [
    new Recipe("Chicken Butter Masala", 
    "Cooked with fresh chicken and Amul butter.", 
    "https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg",
    [
      new Ingredient('Chicken', 1),
      new Ingredient('Butter', 0.5),
    ]),
    new Recipe("Mutton Biryani", 
    "Coocked with fresh mutton and basmati rice.", 
    "https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg",
    [
      new Ingredient('Mutton', 1),
      new Ingredient('Rice', 0.5),
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients : Ingredient[]) {
    this.slService.addAllIngredients(ingredients);
  }
}
