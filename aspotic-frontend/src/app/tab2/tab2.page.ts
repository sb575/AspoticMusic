import { Component, OnInit, ViewChild } from '@angular/core';
import { Track } from '../models/Track';
import { AspoticserviceService } from '../services/aspoticservice.service';
import { Router } from '@angular/router';
import { AlertController, IonicSlides, NavController, Platform, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { User } from '../models/User';
import { AuthService } from '../services/auth.service';
import { AddTrackPage } from './add-track/add-track.page';
import Swiper from 'swiper';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  tracks: Track[] = [];
  track!: Track
  user: User | undefined;
  userId: string = '';
  userIdLogged!: string;

  searchTerm: string = '';
  searchOption: string = 'name';

  artist: string | undefined;
  name: string | undefined;
  date: string | undefined;
  swiper: Swiper;

  recomendations: any[] = [];

  constructor(private platform: Platform, public navCtrl: NavController, public aspoticServ: AspoticserviceService, public authService: AuthService, public router: Router, private formBuilder: FormBuilder, public modalController: ModalController, private toastController: ToastController, private alertController: AlertController) {
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: AddTrackPage
    });
    return await modal.present();
  }

  onSignOutClick() {
    const userId = this.authService.getUserIdFromToken();
    this.authService.signOut(userId).subscribe(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/home']);
    });
  }

  ngOnInit() {
    this.userIdLogged = this.authService.getUserIdFromToken();

    this.userId? this.authService.getUserIdFromToken(): null
    this.getTracks();
  }

  getRecomendations() {
    this.aspoticServ.getRecomendations().subscribe(
      (response) => {
        this.recomendations = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getTracks() {
    this.aspoticServ.getTracks().subscribe(
      (tracks: Track[]) => {
        this.tracks = tracks;
      },
      (error) => {
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

  async deleteTrack(track: Track) {
    const confirmation = await this.warn();

    if(confirmation){
      this.aspoticServ.deleteTrack(track._id).subscribe(
        () => {
          this.tracks = this.tracks.filter(t => t !== track);
          console.log('Track deleted successfully');
          this.showSuccessMessage("Track deleted successfully")
          this.dismiss();
        },
        error => {
          console.error('There was an error deleting the track', error);
          this.showError("There was an error deleting the track")
          this.dismiss();
        }
      );
    } else { return; }
  }

  async warn() {
    return new Promise(async (resolve) => {
      const confirm = await this.alertController.create({
        header: 'Delete track',
        message: 'Are you sure that you want to delete this track?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => { return resolve(false);
            },
          },
          {
            text: 'Delete',
            handler: () => { return resolve(true);
            },
          },
        ],
      });

      await confirm.present();
    });
  }

}
