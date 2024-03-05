import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  socialNetworks = [
    {
      url: 'https://www.linkedin.com/in/alfonso-jonathan/',
      name: 'LinkedIn',
      img: '../../../assets/svg/linkedin.svg'
    },
    {
      url: 'https://github.com/jonathan-alfonso',
      name: 'Github',
      img: '../../../assets/svg/github.svg'
    }
  ]

  

}
