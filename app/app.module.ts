import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RecipeListComponent } from './recipes/recipe-list.component';
import { AppComponent }  from './app.component';
import { StarComponent } from './shared/star.component';
import { RecipeDetailComponent } from './recipes/recipe-detail.component';
import { WelcomeComponent } from './home/welcome.component';

import { RecipeDetailGuard } from './recipes/recipe-guard.service';
import { RecipeFilterPipe } from './recipes/recipe-filter.pipe';


@NgModule({
  imports: [ 
  	BrowserModule, 
  	FormsModule,
  	HttpModule,
    CommonModule,
  	RouterModule.forRoot([
 		{path: 'recipes', component: RecipeListComponent},
 		{path: 'recipe/:id',
     canActivate: [RecipeDetailGuard], 
     component: RecipeDetailComponent},
 		{path: 'login', component: WelcomeComponent},
 		{path: '', redirectTo: 'login', pathMatch: 'full'},
 		{path: '**', redirectTo: 'login', pathMatch: 'full'}
 		 		
  		], {useHash: true})
  	],
  declarations: [ 
  	AppComponent, 
  	RecipeListComponent,
  	StarComponent,
  	RecipeFilterPipe,
  	WelcomeComponent,
  	RecipeDetailComponent
  ],
  providers: [ RecipeDetailGuard],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
