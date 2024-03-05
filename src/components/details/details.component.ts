import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule, DatePipe, NgOptimizedImage } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ReplaySubject, Subscription, takeUntil, tap } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
  RouterModule,
    CommonModule,
    NavbarComponent,
    DatePipe,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatTabsModule,
    NgOptimizedImage,
    FooterComponent

  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit, OnDestroy {
  id: number = 0;
  movieDetails = [];
  movieCredits: Array<any> = [];
  movieReviews: Array<any> = [];
  movieKeywords: Array<any> = [];
  movieRecommendations: Array<any> = [];
  movieSimilar: Array<any> = [];
  movieVideos: Array<any> = [];
  landingUrl: string = 'https://image.tmdb.org/t/p/original/';

  movieTitle: string = '';
  movieOriginalTitle: string = '';
  movieBackdropPath: string = '';
  movieGenres: string[] = [];
  movieGenre: string[] = [];
  movieOverview: string = '';
  moviePosterPath: string = '';
  movieReleaseDate: string = '';
  movieTagline: string = '';
  movieVoteAverage: number = 0;
  movieVoteCount: number = 0;

  movieTabList = ['Similaires', 'Recommandés'];
  moviesTab = 0;
  posterUrl: string = 'https://image.tmdb.org/t/p/w220_and_h330_face/';
  zoomedUrl: string = 'https://image.tmdb.org/t/p/w440_and_h330_face/';

  private _destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  @ViewChild('matTrailerDialog')
  matTrailerDialog!: TemplateRef<any>;

  constructor(
    private _movieService: MovieService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    public trailerDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params
      .pipe(takeUntil(this._destroyed$))
      .subscribe((params) => {
        this.id = params['id'];

        this.getDetails(this.id);
        this.getRecommendations(this.id, 1);
        this.getSimilar(this.id, 1);
        this.getVideos(this.id);
      });
  }

  ngOnDestroy(): void {
    this._destroyed$.next(true);
    this._destroyed$.complete();
  }

  getDetails(id: number) {
    this._movieService
      .getDetails(id)
      .pipe(
        takeUntil(this._destroyed$),
        tap((details) => {
          this.movieTitle = details.title;
          this.movieOriginalTitle = details.original_title;
          this.movieBackdropPath = details.backdrop_path;
          this.movieOverview = details.overview;
          this.moviePosterPath = details.poster_path;
          this.movieReleaseDate = details.release_date;
          this.movieTagline = details.tagline;
          this.movieVoteAverage = details.vote_average;
          this.movieVoteCount = details.vote_count;

          for (let i = 0; i < details.genres.length; i++) {
            this.movieGenres.push(details.genres[i].name);
            console.log('mgenres', details.genres[i].name);
          }

          console.log('mogenres', this.movieGenres);
        })
      )
      .subscribe();
  }

  getCredits(id: number) {
    this._movieService
      .getCredits(id)
      .pipe(takeUntil(this._destroyed$))
      .subscribe((credits) => {
        this.movieCredits = credits.cast;
        console.log('credits', this.movieCredits);
      });
  }

  getKeywords(id: number) {
    this._movieService
      .getKeywords(id)
      .pipe(takeUntil(this._destroyed$))
      .subscribe((keywords) => {
        this.movieKeywords = keywords;
      });
  }

  getRecommendations(id: number, page: number) {
    this._movieService
      .getRecommendations(id, page)
      .pipe(takeUntil(this._destroyed$))
      .subscribe((recommendations) => {
        this.movieRecommendations = recommendations.results;
        console.log('reco', this.movieRecommendations);
      });
  }

  getReviews(id: number, page: number) {
    this._movieService
      .getReviews(id, page)
      .pipe(takeUntil(this._destroyed$))
      .subscribe((reviews) => {
        this.movieReviews = reviews;
        console.log('rev', reviews);
      });
  }

  getSimilar(id: number, page: number) {
    this._movieService
      .getSimilar(id, page)
      .pipe(takeUntil(this._destroyed$))
      .subscribe((similar) => {
        this.movieSimilar = similar.results;
        console.log('simi', this.movieSimilar);
      });
  }

  getVideos(id: number) {
    this._movieService.getVideos(id).subscribe((videos) => {
      this.movieVideos = videos.results;
      console.log('videos', videos);
    });
  }

  openDialog(): void {
    const dialogRef = this.trailerDialog.open(this.matTrailerDialog, {});
    dialogRef.disableClose = false;
  }

  tabMoviesChange({ index }: { index: number }) {
    this.moviesTab = index;
    const movieTypes = ['similar', 'recommendations'];
    const selectedType = movieTypes[index];
    if (selectedType) {
      if (selectedType == movieTypes[0]) {
        this.getSimilar(this.id, 1);
      } else if (selectedType == movieTypes[1]) {
        this.getRecommendations(this.id, 1);
      }
    }
  }
}
