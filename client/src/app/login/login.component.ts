import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _api: ApiService) {}

  ngOnInit() {
  }

}
