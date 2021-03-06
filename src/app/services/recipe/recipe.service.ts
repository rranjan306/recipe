import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { Recipe } from '../../components/recipes/recipes.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

  recipeChanged = new Subject<Recipe[]>();

	private recipes: Recipe[] = [
    new Recipe(
      'A',
      'This is first recipe',
      'https://media.self.com/photos/5f1eef2914b005b8d8eba4d0/4:3/w_384/30-Minute-Roasted-Vegetable-Tacos-with-Chimichurri-BIG-flavor-satisfying-HEALTHY-vegan-glutenfree-plantbased-tacos-chimichurri-cauliflower-minimalistbaker-recipe-6.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 15)]),
    new Recipe(
      'B',
      'This is first recipe',
      'https://www.telegraph.co.uk/content/dam/food-and-drink/2019/01/11/TELEMMGLPICT000185036503_trans_NvBQzQNjv4BqodXSHHE-j78vyZ0iwRUmY_nuzprQ_mxVCWqrJBTJk3A.jpeg',
      [new Ingredient('Onien', 5), new Ingredient('Apple', 20)])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
  	return this.recipes.slice(); // return brand new array 
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
