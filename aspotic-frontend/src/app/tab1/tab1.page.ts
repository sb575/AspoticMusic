import { Component, Input, OnInit } from '@angular/core';
import { AspoticserviceService } from '../services/aspoticservice.service';
import { Track } from '../models/Track';
import { ActivatedRoute, Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { AuthService } from '../services/auth.service';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  searchTerm: string = '';
  showAddSongsButton: boolean = false;
  tracks: Track[] = [];
  offset: number = 0;

  loading = false;

  page = 1;
  pageSize = 20;
  totalPages: number = 20;
  selectedTracks: boolean[] = [];


  constructor(private authService: AuthService, public aspoticServ: AspoticserviceService, public router: Router, private modalController: ModalController, private toastController: ToastController) { }

  ngOnInit() {
    this.authService.getAuthToken().subscribe(
      token => console.log(token),
      error => console.error(error)
    );
  }

  dismiss() {
    this.modalController.dismiss();
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


  setPage(page: number) {
    this.page = page;
    this.doSearch();
  }

  getCurrentPage(): number {
    return this.offset / this.pageSize + 1;
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.doSearch();
    }
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.doSearch();
    }
  }

  doSearch() {
    this.loading = true;
    const offset = (this.page - 1) * this.pageSize;
    this.aspoticServ.searchSong(this.searchTerm, offset, this.pageSize).subscribe(tracks => {
    this.tracks = tracks.map((track: Track) => {
      return {
        _id: track._id,
        name: track.name,
        duration_ms: track.duration_ms,
        album: {
          id: track.album.id,
          name: track.album.name,
          release_date: track.album.release_date,
          release_date_precision: track.album.release_date_precision,
          total_tracks: track.album.total_tracks,
          artists: track.album.artists.map((artist: any) => {
            return {
              id: artist.id,
              name: artist.name
            };
          }),
          images: track.album.images.map((image: any) => {
            return {
              height: image.height,
              url: image.url,
              width: image.width
            };
          })
        },
        id: track.id,
        preview_url: track.preview_url,
        comments: [],
        userId: this.authService.getUserIdFromToken()
      };
    });
    console.log(this.tracks[0])
  });
  this.loading = false;
  }

  onTrackSelected(index: number) {
    this.selectedTracks[index] = !this.selectedTracks[index];
     if (this.selectedTracks.every(selected => !selected)) {
        this.showAddSongsButton = false;
    } else {
        this.showAddSongsButton = true;
    }
  }

  async addSongs() {
    const selectedTracks = this.tracks.filter((track, index) => this.selectedTracks[index]);
    console.log(selectedTracks);

    try {
      const position = await Geolocation.getCurrentPosition();
      const longitude = position.coords.longitude;
      const latitude = position.coords.latitude;
      const accuracy = position.coords.accuracy;

      for (let track of selectedTracks) {
        track.longitude = longitude;
        track.latitude = latitude;
        track.accuracy = accuracy;
      }

      this.aspoticServ.createTracks(selectedTracks).subscribe(
        () => {
          console.log('Tracks added successfully');
          this.showSuccessMessage("Tracks added successfully")
          this.dismiss();
          this.selectedTracks = [];
          this.showAddSongsButton = false;
        },
        (error) => {
          console.error(error);
          this.showError("There was a problem saving tracks")
          this.dismiss();
          this.selectedTracks = [];
          this.showAddSongsButton = false;
        }
      );
    } catch (error) {
      console.error(error);
      this.showError("There was a problem saving tracks")
      this.dismiss();
    }
  }

}
