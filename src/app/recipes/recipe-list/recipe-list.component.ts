import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Esto es una prueba', 'Esta es la descripción de la prueba', 'http://chinesefood-eye.com/wp-content/uploads/2016/03/PF-Changs-Kung-Pao-Chicken.jpg'),
    new Recipe('Esto es otra prueba', 'Esta es la descripción de la otra prueba', 'http://chinesefood-eye.com/wp-content/uploads/2016/03/PF-Changs-Kung-Pao-Chicken.jpg')
  ];
  
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
