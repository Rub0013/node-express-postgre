import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { User } from '../models/user';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private _api: ApiService, private _router: Router) {
    }

    ngOnInit() {}

    register(form: any, event: Event) {
        event.preventDefault();
        this._api.register(new User(form.value.name, form.value.email, form.value.pass)).subscribe(
            res => {
                console.log(res);
                // this._router.navigate(['gallery']);
            },
            err => {
                console.log(err);
            }
        );
    }
}
