import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IRecipe } from './recipe';


@Injectable()
export class RecipeService {
	private _recipeUrl = './data/recipes.json'

	constructor(private _http: Http){}

	getRecipes(): Observable<IRecipe[]>{
		return this._http.get(this._recipeUrl)
		.map((response: Response) => <IRecipe[]> response.json())
		.catch(this.handleError);
	}

	getRecipe(id: number): Observable<IRecipe> {
        return this.getRecipes()
            .map((recipes: IRecipe[]) => recipes.find(p => p.recipeId === id));
    }

   private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}