import { Component, OnInit } from '@angular/core';
import fitty from 'fitty';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    fitty('#company-name');
  }

}
