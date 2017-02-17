"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var recipe_list_component_1 = require("./recipes/recipe-list.component");
var app_component_1 = require("./app.component");
var star_component_1 = require("./shared/star.component");
var recipe_detail_component_1 = require("./recipes/recipe-detail.component");
var welcome_component_1 = require("./home/welcome.component");
var recipe_guard_service_1 = require("./recipes/recipe-guard.service");
var recipe_filter_pipe_1 = require("./recipes/recipe-filter.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            common_1.CommonModule,
            router_1.RouterModule.forRoot([
                { path: 'recipes', component: recipe_list_component_1.RecipeListComponent },
                { path: 'recipe/:id',
                    canActivate: [recipe_guard_service_1.RecipeDetailGuard],
                    component: recipe_detail_component_1.RecipeDetailComponent },
                { path: 'login', component: welcome_component_1.WelcomeComponent },
                { path: '', redirectTo: 'login', pathMatch: 'full' },
                { path: '**', redirectTo: 'login', pathMatch: 'full' }
            ], { useHash: true })
        ],
        declarations: [
            app_component_1.AppComponent,
            recipe_list_component_1.RecipeListComponent,
            star_component_1.StarComponent,
            recipe_filter_pipe_1.RecipeFilterPipe,
            welcome_component_1.WelcomeComponent,
            recipe_detail_component_1.RecipeDetailComponent
        ],
        providers: [recipe_guard_service_1.RecipeDetailGuard],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map