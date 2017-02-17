"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var recipe_service_1 = require("./recipe.service");
var router_1 = require("@angular/router");
var RecipeListComponent = (function () {
    function RecipeListComponent(_recipeService, _router) {
        this._recipeService = _recipeService;
        this._router = _router;
        this.recipeListTitle = 'Últimas receitas';
        this.imageWidth = 160;
        this.imageMargin = 2;
        this.showImage = false;
        var x = document.cookie.split(';');
        console.log(document.cookie);
        var i = 0;
        for (; i < x.length; i++) {
            if (x[i].split('=')[0].trim() == 'sessionID') {
                var cookieValue = x[i].split('=')[1];
                console.log(cookieValue);
                break;
            }
        }
        console.log(cookieValue);
        if (cookieValue == undefined) {
            this._router.navigate(['login']);
        }
        else {
            var auth = atob(cookieValue).split('??');
            console.log('auth ' + auth + '| atob auth0 ' + atob(auth[0]));
            if (auth[0] == 'admin' && auth[1] == 'admin') {
                this._router.navigate(['recipes']);
            }
        }
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._recipeService.getRecipes()
            .subscribe(function (recipes) { return _this.recipes = recipes; }, function (error) { return _this.errorMessage = error; });
    };
    RecipeListComponent.prototype.onRatingClicked = function (message) {
        this.recipeListTitle = 'Recipe List: ' + message;
    };
    return RecipeListComponent;
}());
RecipeListComponent = __decorate([
    core_1.Component({
        selector: 'pm-recipes',
        moduleId: module.id,
        templateUrl: 'recipe-list.component.html',
        styleUrls: ['recipe-list.component.css']
    }),
    __metadata("design:paramtypes", [recipe_service_1.RecipeService, router_1.Router])
], RecipeListComponent);
exports.RecipeListComponent = RecipeListComponent;
//# sourceMappingURL=recipe-list.component.js.map