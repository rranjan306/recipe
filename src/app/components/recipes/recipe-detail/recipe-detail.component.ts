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

  id: number;
  recipes: Array<any> = [];
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  editRecipe(recipe: Recipe) {
    //this.router.navigate(['edit'], {relativeTo: this.route});
    this.router.navigate(['../', 'edit', this.id], {relativeTo: this.route}); // Construct more dynamic routes
  }

  onDeleteItem() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/'], {relativeTo: this.route});
  }
}
