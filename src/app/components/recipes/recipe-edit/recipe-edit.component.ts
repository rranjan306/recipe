import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
	editMode: boolean = false;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
  	this.router.params.subscribe((params: Params) => {
  		let id = +params['id'];
  		this.editMode = id ? true : false;
  		console.log(this.editMode);
  	})
  }
}
