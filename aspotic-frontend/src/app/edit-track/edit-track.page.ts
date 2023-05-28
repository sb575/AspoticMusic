import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController, NavParams, Platform, ToastController } from '@ionic/angular';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { Track } from '../models/Track';
import { AspoticserviceService } from '../services/aspoticservice.service';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-edit-track',
  templateUrl: './edit-track.page.html',
  styleUrls: ['./edit-track.page.scss'],
})
export class EditTrackPage implements OnInit {

  trackForm!: FormGroup;
  track!: Observable<Track>;
  imageUrl!: string
  trackId!: string;

  constructor(private platform: Platform, private navParams: NavParams, private aspoticServ: AspoticserviceService,  public authService: AuthService, private modalController: ModalController, private formBuilder: FormBuilder, public sanitizer: DomSanitizer, private toastController: ToastController) {
    defineCustomElements(window);
  }

  ngOnInit() {
    this.trackForm = this.formBuilder.group({
      name: ['', Validators.required],
      artist: ['', Validators.required],
      album: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });

    this.getTrackData();

  }

  selectFromCamera() {
    Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    }).then(
      imageData => {
        const image = new Image();
        image.src = 'data:image/jpeg;base64,' + imageData.base64String;
        image.onload = () => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');

          const width = 640;
          const height = 640;

          canvas.width = width;
          canvas.height = height;
          context?.drawImage(image, 0, 0, width, height);

          this.imageUrl = canvas.toDataURL('image/jpeg');
          this.trackForm.patchValue({
            imageUrl: this.imageUrl
          });
        };
      },
      error => {
        console.error('Error selecting image from camera', error);
      }
    );
  }


  getTrackData() {
    this.aspoticServ.getTrackById(this.trackId).subscribe(
      track => {
        this.trackForm.patchValue({
          name: track.name,
          artist: track.album.artists[0].name,
          album: track.album.name,
          imageUrl: track.album.images[0].url
        });
      },
      error => {
        console.error('Error getting track data', error);
      }
    );
  }


  async showError(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      color: 'danger',
      mode: 'ios',
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
      position: 'bottom'
    });
    toast.present();
  }


  dismiss() {
    this.modalController.dismiss();
  }

  onSubmit() {
    if (this.trackForm.invalid) {
      return;
    }

    const trackId = this.trackId = this.navParams.get('trackId');
    const dateObj = new Date();
    const date = moment(dateObj).format('YYYY-MM-DD').toString();
    const userId = this.authService.getUserIdFromToken();
    const updatedTrack: Track = {
      _id: this.trackId,
      name: this.trackForm.value.name,
      album: {
        artists: [{ id: '', name: this.trackForm.value.artist }],
        images: [{ height: 0, url: this.trackForm.value.imageUrl, width: 0 }],
        id: '',
        name: this.trackForm.value.name,
        release_date: date,
        release_date_precision: '',
        total_tracks: 0
      },
      duration_ms: 0,
      comments: [],
      userId: userId,
      id: '',
      preview_url: ''
    };

    this.aspoticServ.editTrack(trackId, updatedTrack)
      .subscribe(
        response => {
          console.log('Track updated successfully', response);
          this.showSuccessMessage("Track updated successfully")
          this.dismiss();
          this.platform.ready().then(() => {
            location.reload();
          });
        },
        error => {
          console.error('Error updating track', error);
          this.showError("Error updating track")
          this.dismiss();
        }
      );
  }


}
