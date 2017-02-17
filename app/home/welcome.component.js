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
var router_1 = require("@angular/router");
var WelcomeComponent = (function () {
    function WelcomeComponent(_router) {
        this._router = _router;
        this.pageTitle = 'Login';
        this.data = { "username": null, "password": null };
    }
    WelcomeComponent.prototype.formSubmit = function () {
        var uname = this.data.username;
        var pass = this.data.password;
        var key = btoa(btoa(uname) + '??' + btoa(pass));
        document.cookie = 'sessionID=' + key;
        if (uname == 'admin' && pass == 'admin') {
            this._router.navigate(['recipes']);
        }
        else {
            this._router.navigate(['home']);
        }
    };
    WelcomeComponent.prototype.bodyBackgroundImage = function () {
        return 'url("../assets/images/img-bg-login.jpg")';
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/home/welcome.component.html',
        host: {
            "[style.background-image]": "bodyBackgroundImage()"
        }
    }),
    __metadata("design:paramtypes", [router_1.Router])
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map