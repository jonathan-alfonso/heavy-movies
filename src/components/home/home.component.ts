import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { ReplaySubject, takeUntil } from 'rxjs';
import { LandingComponent } from '../shared/landing/landing.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    LandingComponent,
    FooterComponent,
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  type: string = '';

  movieTabList = ['A l\'affiche', 'Populaires', 'A venir', 'Mieux notés'];
  popularMovies: Array<any> = [];
  nowPlayingMovies: Array<any> = [];
  topRatedMovies: Array<any> = [];
  upcomingMovies: Array<any> = [];
  moviesTab = 0;
  posterUrl: string = 'https://image.tmdb.org/t/p/w220_and_h330_face/';
  zoomedUrl: string = 'https://image.tmdb.org/t/p/w440_and_h330_face/';

  maxMovies: number = 5;

  private _destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private _movieService: MovieService, 
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getType();

    this.getNowPlayingMovies(1);
  }

  ngOnDestroy(): void {
    this._destroyed$.next(true);
    this._destroyed$.complete();
  }

  getPopularMovies(page: number) {
    this._movieService.getPopular(page).pipe(takeUntil(this._destroyed$)).subscribe(popular => {
      this.popularMovies = popular.results;
      this.popularMovies = this.popularMovies.slice(0, 7);
    });
  }

  getNowPlayingMovies(page: number) {
    this._movieService.getNowPlaying(page).pipe(takeUntil(this._destroyed$)).subscribe(nowPlaying => {
      this.nowPlayingMovies = nowPlaying.results;
      this.nowPlayingMovies = this.nowPlayingMovies.slice(0, 7);
    });
  }

  getTopRatedMovies(page: number) {
    this._movieService.getTopRated(page).pipe(takeUntil(this._destroyed$)).subscribe(topRated => {
      this.topRatedMovies = topRated.results;
      this.topRatedMovies = this.topRatedMovies.slice(0, 7);
    });
  }

  getUpcomingMovies(page: number) {
    this._movieService.getUpcoming(page).pipe(takeUntil(this._destroyed$)).subscribe((upcoming) => {
      this.upcomingMovies = upcoming.results;
      this.upcomingMovies.sort((a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime());
      this.upcomingMovies = this.upcomingMovies.slice(0, 7);
    });
  }

  tabMoviesChange({ index }: { index: number }) {
    this.moviesTab = index;
    const movieTypes = ['now_playing', 'popular', 'upcoming', 'top_rated'];
    const selectedType = movieTypes[index];
    if (selectedType) {
      if (selectedType == movieTypes[0]) {
        this.getNowPlayingMovies(1);
      } else if (selectedType == movieTypes[1]) {
        this.getPopularMovies(1);
      } else if (selectedType == movieTypes[2]) {
        this.getUpcomingMovies(1);
      } else if (selectedType == movieTypes[3]) {
        this.getTopRatedMovies(1);
      }
    }
  }

  getType() {
    this.type = this._type();
  }

  private _type() {
    return (this.type = this._router.url.split('/')[1]);
  }
}
