import { Component } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';


@Component({
	selector: 'cb-app',
	template: `
	<div class="col-md-6 col-md-offset-3">
		<nav class="navbar navbar-inverse" role="navigation">
			<div class='navbar-header'>
				<a class='navbar-brand'><img src="app/assets/images/logo-coco-bambu-mini.png"></a>
			</div>
			<ul class="nav navbar-nav navbar-right">
				<li><a [routerLink]="['/welcome']"><img src="app/assets/images/icon-key.png"></a></li>
			</ul>
		</nav>
	</div>
	<div>
		<router-outlet></router-outlet>
	</div>
	`,
	providers: [RecipeService]
})
export class AppComponent{
	pageTitle: string = 'Coco Bambu';

}