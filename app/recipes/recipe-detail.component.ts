import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { IRecipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
    templateUrl: 'app/recipes/recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Recipe Detail';
    recipe: IRecipe;
    ingredients:string[];
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _recipeService: RecipeService) {
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getRecipe(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getRecipe(id: number) {
        this._recipeService.getRecipe(id).subscribe(
            recipe => this.recipe = recipe,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/recipes']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Recipe Detail: ' + message;
    }
}