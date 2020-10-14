import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../../../services/recipe/recipe.service';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onRecipeSelect() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
