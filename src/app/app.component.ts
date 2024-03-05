import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/shared/navbar/navbar.component';
import { HomeComponent } from '../components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    CommonModule,
    NavbarComponent,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ng-movies';
  popularMovies: any = '';
  nowPlayingMovies: any = '';
  topRatedMovies: any = '';
  upcomingMovies: any = '';

  constructor(private _movieService: MovieService) {}

  ngOnInit(): void {}

  getPopularMovies(page: number) {
    this._movieService.getPopular(page).subscribe((popular) => {
      this.popularMovies = popular;
      this.nowPlayingMovies = '';
      this.topRatedMovies = '';
      this.upcomingMovies = '';
    });
  }

  getNowPlayingMovies(page: number) {
    this._movieService.getNowPlaying(page).subscribe((nowPlaying) => {
      this.nowPlayingMovies = nowPlaying;
      this.popularMovies = '';
      this.topRatedMovies = '';
      this.upcomingMovies = '';
    });
  }

  getTopRatedMovies(page: number) {
    this._movieService.getTopRated(page).subscribe((topRated) => {
      this.topRatedMovies = topRated;
      this.popularMovies = '';
      this.nowPlayingMovies = '';
      this.upcomingMovies = '';
    });
  }

  getUpcomingMovies(page: number) {
    this._movieService.getUpcoming(page).subscribe((upcoming) => {
      this.upcomingMovies = upcoming;
      this.popularMovies = '';
      this.nowPlayingMovies = '';
      this.topRatedMovies = '';
    });
  }
}
