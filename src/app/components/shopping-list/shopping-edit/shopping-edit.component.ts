import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ShoppingListService } from '../../../services/shopping-list/shopping-list.service';
import { Ingredient } from '../../../shared/ingredient.model';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  editingSubscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editItem: Ingredient;

  @ViewChild('form') form: NgForm;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.editingSubscription = this.shoppingListService.startedEditing
      .subscribe((index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editItem = this.shoppingListService.getIngredient(index);
        this.form.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });
      });
  }

  onSubmit() {
    if(this.form.invalid) {
     return; 
    }

    let name = this.form.value.name;
    let amount = this.form.value.amount;
    let ingredient = new Ingredient(name, amount);

    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, ingredient);
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }

    this.editMode = false;
    this.form.reset();
  }

  onClear() {
    this.editMode = false;
    this.form.reset();
  }

  onDelete() {
    this.shoppingListService.deleteUpdate(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.editingSubscription.unsubscribe();
  }
}
