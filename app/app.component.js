"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var recipe_service_1 = require("./recipes/recipe.service");
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'Coco Bambu';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'cb-app',
        template: "\n\t<div class=\"col-md-6 col-md-offset-3\">\n\t\t<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n\t\t\t<div class='navbar-header'>\n\t\t\t\t<a class='navbar-brand'><img src=\"app/assets/images/logo-coco-bambu-mini.png\"></a>\n\t\t\t</div>\n\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t<li><a [routerLink]=\"['/welcome']\"><img src=\"app/assets/images/icon-key.png\"></a></li>\n\t\t\t</ul>\n\t\t</nav>\n\t</div>\n\t<div>\n\t\t<router-outlet></router-outlet>\n\t</div>\n\t",
        providers: [recipe_service_1.RecipeService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map