import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Track } from '../models/Track';
import { AspoticserviceService } from '../services/aspoticservice.service';
import { AuthService } from '../services/auth.service';
import { ModalController, ToastController } from '@ionic/angular';
import { LoginPage } from './login/login.page';
import { SignupPage } from './signup/signup.page';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  searchTerm: string = '';
  tracks: Track[] = [];
  track!: Track;
  searchOption: string = 'name';

  artist: string | undefined;
  name: string | undefined;
  date: string | undefined;

  constructor(public aspoticServ: AspoticserviceService, public router: Router, private modalController: ModalController, private toastController: ToastController) {}

  ngOnInit() {
    this.getTracks();

  }

  async signIn() {
    const modal = await this.modalController.create({
      component: LoginPage
    });
    return await modal.present();
  }

  async signUp() {
    const modal = await this.modalController.create({
      component: SignupPage
    });
    return await modal.present();
  }

  async showError(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      color: 'danger',
      mode: 'ios',
      cssClass: 'custom-toast',
      position: 'bottom'
    });
    toast.present();
  }

  async showSuccessMessage(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      color: 'success',
      mode: 'ios',
      cssClass: 'custom-toast',
      position: 'bottom'
    });
    toast.present();
  }


  dismiss() {
    this.modalController.dismiss();
  }

  getTracks() {
    this.aspoticServ.getTracks().subscribe(
      (tracks: Track[]) => {
        console.log(tracks);
        this.showSuccessMessage("Tracks obtained successfully")
        this.dismiss();
        this.tracks = tracks;
      },
      (error) => {
        console.error(error);
        this.showError("There was an error getting the tracks")
        this.dismiss();
      }
    );
  }

  searchTracks() {

    if (!this.searchTerm){
      this.aspoticServ.getTracks().subscribe(tracks => {
        this.tracks = tracks;
      });
    }else {
      {
        switch (this.searchOption) {
          case 'name':
            this.aspoticServ.getTracksByName(this.searchTerm).subscribe(tracks => {
              this.tracks = tracks;
            });
            break;
          case 'artist':
            this.aspoticServ.getTracksByArtist(this.searchTerm).subscribe(tracks => {
              this.tracks = tracks;
            });
            break;
          case 'date':
            this.aspoticServ.getTracksByDate(this.searchTerm).subscribe(tracks => {
              this.tracks = tracks;
            });
            break;
          default:
            this.aspoticServ.getTracks().subscribe(tracks => {
              this.tracks = tracks;
            });
            break;
        }
      }
    }

  }
}
