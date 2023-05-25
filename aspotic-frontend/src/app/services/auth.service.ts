import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, tap } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://webapps.mycnsamastertaii.tech:3000/api';

  userData: any;

  constructor(
    private http: HttpClient,
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') || '{}');
      } else {
        localStorage.setItem('user', '{}');
        JSON.parse(localStorage.getItem('user') || '{}');
      }
    });
  }

  getAuthToken() {
    return this.http.get(`${this.url}/token`);
  }

  login(value: {username: string, password: string}) {
    return  this.http.post<{ token: string }>(`${this.url}/auth/login`, value)
      .pipe(
        tap(response => {
          localStorage.setItem('token', response.token);
        })
      );
  }

  doLogin(value: { username: string; password: string; }) {
    return new Promise<any>((resolve, reject) => {
     this.afAuth.signInWithEmailAndPassword(value.username, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
   }


  signup(value: { username: string, password: string }) {
    return this.http.post<{ token: string }>(`${this.url}/auth/signup`, value)
      .pipe(
        tap(response => {
          localStorage.setItem('token', response.token);
        })
      );
  }

  createUser(value: { username: string; password: string;}) {
    return new Promise<any>((resolve, reject) => {
        this.afAuth.createUserWithEmailAndPassword(value.username, value.password)
        .then(
          res => resolve(res),
          err => reject(err)
        )
    })
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUserIdFromToken(): string{
    const token = localStorage.getItem('token');
    if (!token) {
      return "";
    }
    const decodedToken: any = jwtDecode(token);
    const user = decodedToken.sub;
    const id = user._id;
    console.log(id);
    return id;
  }

  getUsernameFromToken(): string {
    const token = localStorage.getItem('token');
    if (!token) {
      return "";
    }
    const decodedToken: any = jwtDecode(token);
    const user = decodedToken.sub;
    const username = user.username;
    console.log(username);
    return username;
  }


  getUser(): Observable<User> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<User>(`${this.url}/users/me`, httpOptions);
  }

  signOut(id: string): Observable<any> {
    return this.http.post(`${this.url}/auth/signout/${id}`, null);
  }

}
