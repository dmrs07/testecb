import { Component, OnInit } from '@angular/core';
import { IRecipe } from './recipe';
import { RecipeService } from './recipe.service';
import { Router, CanActivate } from '@angular/router';


@Component({
	selector: 'pm-recipes',
	moduleId: module.id,
	templateUrl: 'recipe-list.component.html',
	styleUrls: ['recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipeListTitle: string = 'Últimas receitas';
	imageWidth: number = 160;
	imageMargin: number = 2;
	showImage: boolean = false;
	listFilter: string;
	recipes: IRecipe[];
	errorMessage: string;
	
	constructor(private _recipeService: RecipeService, public _router: Router){
		var x = document.cookie.split(';');
		console.log(document.cookie);
		var i = 0;
		for(; i < x.length; i++){
			if(x[i].split('=')[0].trim() == 'sessionID'){
				var cookieValue = x[i].split('=')[1];
				console.log(cookieValue);
				break;
			}
		}
		console.log(cookieValue);
		if(cookieValue == undefined) {
			this._router.navigate(['login']);
		} else {
			var auth = atob(cookieValue).split('??');
			console.log('auth ' +auth+'| atob auth0 '+atob(auth[0]) );
			if(auth[0] == 'admin' && auth[1] == 'admin'){
				this._router.navigate(['recipes']);
			} 
		}
	}	

	ngOnInit(): void {
	  this._recipeService.getRecipes()
		.subscribe(recipes => this.recipes = recipes,
			error => this.errorMessage = <any>error);
	}

	onRatingClicked(message: string): void{
		this.recipeListTitle = 'Recipe List: '+ message;
	}
}