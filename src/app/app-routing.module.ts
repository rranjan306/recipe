import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'recipes'},
  {path: 'recipes', component: RecipesComponent, children: [
  	{path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent},
  	{path: ':id', component: RecipeDetailComponent},
    {path: 'edit/:id', component: RecipeEditComponent},
  ]},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})

export class AppRouterModule {}
