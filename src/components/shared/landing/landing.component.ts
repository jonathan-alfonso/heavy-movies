import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  rdInt: number = 1;
  landingPic: string = '';

  constructor() {}

  ngOnInit(): void {
    this.getLandingPage();
  }

  getLandingPage() {
    this.rdInt = this._randomIntFromInterval(1, 7);
    this.landingPic = `../../assets/img/landing${this.rdInt}.jpg`;
  }

  private _randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
