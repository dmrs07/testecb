import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { IUser } from './user';



@Component({
    templateUrl: 'app/home/welcome.component.html',
    host:{
    	"[style.background-image]":"bodyBackgroundImage()"
    }
})
export class WelcomeComponent{
    public pageTitle: string = 'Login';
    data: IUser = {"username":null,"password":null};
    constructor(private _router : Router){
    }

    formSubmit(): void{
    	var uname = this.data.username;
    	var pass = this.data.password;
    	var key = btoa(btoa(uname) + '??' + btoa(pass));
    	
    	document.cookie = 'sessionID='+key;

    	if(uname == 'admin' && pass == 'admin'){
    		this._router.navigate(['recipes']);
    	} else {
    		this._router.navigate(['home']);
    	}
    }

  	bodyBackgroundImage() {
    	return 'url("../assets/images/img-bg-login.jpg")';
  	}

}
