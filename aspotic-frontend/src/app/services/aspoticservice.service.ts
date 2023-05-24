import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Album, CommentData, Track } from '../models/Track';
import { DecodedToken, User } from '../models/User';
import jwtDecode from 'jwt-decode';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AspoticserviceService {

  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private authService: AuthService) { }





  searchSong(title: string, offset: number, limit: number): Observable<Track[]> {
    return this.http.get(`${this.url}/search/track/${encodeURI(title)}?offset=${offset}&limit=${limit}`)
      .pipe(
        map((response: any) => {
          const tracks = response.map((item: any) => {
            const album: Album = {
              id: item.album.id,
              name: item.album.name,
              artists: item.album.artists.map((artist: any) => {
                return { id: artist.id, name: artist.name };
              }),
              images: item.album.images.map((image: any) => {
                return { height: image.height, url: image.url, width: image.width };
              }),
              release_date: item.album.release_date,
              release_date_precision: item.album.release_date_precision,
              total_tracks: item.album.total_tracks,
            };
            const comments: CommentData[] = item.comments.map((comment: any) => {
              return { author: comment.author, comment: comment.comment, rate: comment.rate };
            });
            const track: Track = {
              _id: item._id,
              name: item.name,
              duration_ms: item.duration_ms,
              album: album,
              comments: [],
              userId: ''
            };
            return track;
          });
          return tracks;
        })
      );
  }

  createTracks(tracks: Track[]): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.post<any>(`${this.url}/tracks`, { tracks }, httpOptions);
  }

  createTrack(track: Track):  Observable<Track>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.post<Track>(`${this.url}/track`, track, httpOptions);
  }


  getTracks(): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.url}/getTracks`);
  }

  getTrackById(id: string): Observable<Track> {
    return this.http.get<Track>(`${this.url}/tracks/${id}`);
  }


  addCommentToTrack(trackId: string, comment: CommentData): Observable<CommentData> {
    const url = `${this.url}/tracks/${trackId}/comments`;
    const userId = this.authService.getUserIdFromToken();
    //const username = this.authService.getUsernameFromToken();

    //To add the name of the user
    /*if(userId != ""){
      comment.author = username.split('@')[0];
    }*/

    comment.userId = userId;
    return this.http.post<CommentData>(url, comment);
  }

  deleteTrack(trackId: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.delete(`${this.url}/track/${trackId}`, httpOptions);
  }


  deleteComment(trackId: string, commentId: string): Observable<any> {
    return this.http.delete(`${this.url}/tracks/${trackId}/comments/${commentId}`);
  }

  getTracksByArtist(artistName: string): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.url}/tracks/searchArtistName/${artistName}`);
  }

  getTracksByName(trackName: string): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.url}/tracks/searchTrackName/${trackName}`);
  }

  getTracksByDate(releaseDate: string): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.url}/tracks/searchTrackDate/${releaseDate}`);
  }

  editTrack(trackId: string, updatedTrack: Track): Observable<Track> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.put<Track>(`${this.url}/track/${trackId}`, updatedTrack, httpOptions);
  }
}
