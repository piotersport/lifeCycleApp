import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy, DoCheck {
  public isAuthenticated = false;

  constructor() {
    console.log('constructor()');
  }

  ngOnInit(): void {
    console.log('ngOnDestroy()');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck()');
  }

}
