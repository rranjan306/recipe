import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../services/recipe/recipe.service';
import { Recipe } from '../recipes.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipes: Array<any> = [];
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.route.params.subscribe((params: Params) => {
      this.recipe = this.recipes.find((recipe) => recipe.id === +params['id']);
    });
  }

  editRecipe(recipe: Recipe) {
    //this.router.navigate(['edit'], {relativeTo: this.route});
    this.router.navigate(['../', 'edit', this.recipe.id], {relativeTo: this.route}); // Construct more dynamic routes
  }

  // onAddShoppingList() {
  // 	this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  // }
}
