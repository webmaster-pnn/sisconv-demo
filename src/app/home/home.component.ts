import { AuthService } from './../login/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    
  }

}
