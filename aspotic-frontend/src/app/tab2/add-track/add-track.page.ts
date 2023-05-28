import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ModalController, Platform, ToastController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import * as moment from 'moment';
import { DomSanitizer } from '@angular/platform-browser';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { Track } from 'src/app/models/Track';
import { AspoticserviceService } from 'src/app/services/aspoticservice.service';
import { AuthService } from 'src/app/services/auth.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-add-track',
  templateUrl: './add-track.page.html',
  styleUrls: ['./add-track.page.scss'],
})
export class AddTrackPage implements OnInit {

  trackForm!: FormGroup;
  track!: Track
  imageUrl!: string

  constructor(private platform: Platform, private aspoticServ: AspoticserviceService,  public authService: AuthService, private modalController: ModalController, private formBuilder: FormBuilder, public sanitizer: DomSanitizer, private toastController: ToastController) {
    defineCustomElements(window);
  }

  ngOnInit() {
    this.trackForm = this.formBuilder.group({
      name: ['', Validators.required],
      artist: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });
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

  async onSubmit() {

    try {
      const dateObj = new Date();
      const date = moment(dateObj).format('YYYY-MM-DD').toString();
      const userId = this.authService.getUserIdFromToken();
      const trackData = this.trackForm.value;
      const track: Track = {
        name: trackData.name,
        album: {
          artists: [{ id: '', name: trackData.artist }],
          id: '',
          images: [{ height: 300, url: trackData.imageUrl, width: 300 }],
          name: '',
          release_date: date,
          release_date_precision: '',
          total_tracks: 0
        },
        _id: '',
        duration_ms: 0,
        comments: [],
        userId: userId,
        spotifyId: '',
        preview_url: ''
      };

      const position = await Geolocation.getCurrentPosition();
      const longitude = position.coords.longitude;
      const latitude = position.coords.latitude;
      const accuracy = position.coords.accuracy;

      track.longitude = longitude;
      track.latitude = latitude;
      track.accuracy = accuracy;

      console.log('New track:', track);
      this.aspoticServ.createTrack(track).subscribe(response => {
        console.log(response);
        this.showSuccessMessage("Track created successfully")
        this.dismiss();
        this.platform.ready().then(() => {
          location.reload();
        });

      },
        (error) => {
          console.error(error);
          this.showError("There was an error creating the track")
          this.dismiss();
        }
      );
    } catch (error) {
      console.error(error);
      this.showError("There was an error creating the track")
      this.dismiss();
    }
  }

}
