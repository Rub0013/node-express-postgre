import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { User } from './models/user';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

    public API_BASE = 'http://127.0.0.1:8000/api';
    public REGISTER_API = `${this.API_BASE}/register`;
    public LOGIN_API = `${this.API_BASE}/login`;

    public signedIn: User | null;

    constructor(private _http: Http) {
    }

    register(user: User): Observable<Response> {
        return this._http.post(this.REGISTER_API, user)
            .map((res: Response) => {
                return res.json();
            })
            .catch((err) => {
                return Observable.throw(JSON.parse(err._body));
            });
    }

    login(user: any): Observable<Response> {
        return this._http.post(this.LOGIN_API, user)
            .map((res: Response) => {
                return res.json();
            })
            .catch((err) => {
                return Observable.throw(JSON.parse(err._body));
            });
    }
}
