import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A', 'This is first recipe', 'https://media.self.com/photos/5f1eef2914b005b8d8eba4d0/4:3/w_384/30-Minute-Roasted-Vegetable-Tacos-with-Chimichurri-BIG-flavor-satisfying-HEALTHY-vegan-glutenfree-plantbased-tacos-chimichurri-cauliflower-minimalistbaker-recipe-6.jpg'),
    new Recipe('B', 'This is first recipe', 'https://www.telegraph.co.uk/content/dam/food-and-drink/2019/01/11/TELEMMGLPICT000185036503_trans_NvBQzQNjv4BqodXSHHE-j78vyZ0iwRUmY_nuzprQ_mxVCWqrJBTJk3A.jpeg')
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelect(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
