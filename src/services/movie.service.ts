import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = environment.apiKey;
  language: string = 'fr-FR';
  region: string = 'FR';

  popularMovies: any;

  constructor(
    private _httpClient: HttpClient
  ) { }

  /**
   * Search movies by title
   * @param title Movie title
   * @param page Current page
   * @returns movies corresponding to title string
   */
  getMovies(title: string, page: number): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set('query', title)
      .set('page', page)
      .set('language', this.language)
      .set('region', this.region)
      .set('api_key', this.apiKey);

    return this._httpClient.get(`${this.baseUrl}/search/movie`, { params });
  }

  /**
   * get a movie by its id
   * @param id movie's id
   * @returns details of the movie
   */
  getDetails(id: number): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', this.language);
    return this._httpClient.get(`${this.baseUrl}/movie/${id}`, { params });
  }

  /**
   * Get most popular movies
   * @param page 
   * @returns list of movies by popularity
   */
  getPopular(page: number): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set('language', this.language)
      .set('page', page)
      .set('api_key', this.apiKey);

    return this._httpClient.get(`${this.baseUrl}/movie/popular`, { params });
  }

  /**
   * Get movies playing in theaters
   * @param page 
   * @returns list of movies in theaters
   */
  getNowPlaying(page: number): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set('language', this.language)
      .set('region', this.region)
      .set('page', page)
      .set('api_key', this.apiKey);

    return this._httpClient.get(`${this.baseUrl}/movie/now_playing`, { params });
  }

  /**
   * Get top rated movies
   * @param page 
   * @returns list of movies by rating
   */
  getTopRated(page: number): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set('language', this.language)
      .set('region', this.region)
      .set('page', page)
      .set('api_key', this.apiKey);

    return this._httpClient.get(`${this.baseUrl}/movie/top_rated`, { params });
  }

  /**
   * Get upcoming movies
   * @param page 
   * @returns list of upcoming movies
   */
  getUpcoming(page: number): Observable<any> {
    const params: HttpParams = new HttpParams()
    .set('language', this.language)
    .set('region', this.region)
    .set('page', page)
    .set('api_key', this.apiKey);
      
    return this._httpClient.get(`${this.baseUrl}/movie/upcoming`, { params });
  }

  /**
   * get movie's credits
   * @param id movie id
   * @returns credits of a movie
   */
  getCredits(id: number): Observable<any> {
    const params: HttpParams = new HttpParams().set('api_key', this.apiKey);
    return this._httpClient.get(`${this.baseUrl}/movie/${id}/credits`, { params });
  }

  /**
   * get movie's keywords
   * @param id movie id
   * @returns movie's keywords
   */
  getKeywords(id: number): Observable<any> {
    const params: HttpParams = new HttpParams().set('api_key', this.apiKey);
    return this._httpClient.get(`${this.baseUrl}/movie/${id}/keywords`, { params });
  }

  /**
   * get recommendations based on movie, using its id
   * @param id movie id
   * @param page page number
   * @returns list of recommendations based on movie
   */
  getRecommendations(id: number, page: number): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', this.language)
      .set('page', page);

    return this._httpClient.get(`${this.baseUrl}/movie/${id}/recommendations`, { params });
  }

  /**
   * get reviews for the movie
   * @param id movie id
   * @param page page number
   * @returns reviews for movie
   */
  getReviews(id: number, page: number): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set('language', this.language)
      .set('page', page)
      .set('api_key', this.apiKey);

    return this._httpClient.get(`${this.baseUrl}/movie/${id}/reviews`, { params });
  }

  getSimilar(id: number, page: number): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set('language', this.language)
      .set('page', page)
      .set('api_key', this.apiKey);

    return this._httpClient.get(`${this.baseUrl}/movie/${id}/similar`, { params });
  }

  getVideos(id: number): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set('language', this.language)
      .set('api_key', this.apiKey);

    return this._httpClient.get(`${this.baseUrl}/movie/${id}/videos`, { params });
  }
}
