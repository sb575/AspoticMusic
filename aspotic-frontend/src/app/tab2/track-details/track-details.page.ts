import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AspoticserviceService } from '../../services/aspoticservice.service';
import { CommentData, Track } from '../../models/Track';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { AlertController, ModalController, Platform, ToastController } from '@ionic/angular';
import { AddCommentPage } from '../add-comment/add-comment.page';
import { EditTrackPage } from 'src/app/edit-track/edit-track.page';

@Component({
  selector: 'app-track-details',
  templateUrl: './track-details.page.html',
  styleUrls: ['./track-details.page.scss'],
})
export class TrackDetailsPage implements OnInit {

  userId: string = '';
  userIdLogged!: string;
  authorComment!: string | null;
  trackId!: string;
  track!: Observable<Track>;
  trackComment!: Track;
  commentId!: string;


  constructor(private platform: Platform, private activateRoute: ActivatedRoute, public aspoticServ: AspoticserviceService, private modalController: ModalController, public authService: AuthService, public router: Router, private toastController: ToastController, private alertController: AlertController) {
   }

  ngOnInit(): void {

    this.activateRoute.params.subscribe((params: Params) => {
      const id: string = params['_id'];
      this.trackId = id;
      this.track = this.aspoticServ.getTrackById(id)
      console.log(this.track)
    });

    this.userIdLogged = this.authService.getUserIdFromToken();

    this.userId? this.authService.getUserIdFromToken(): null
    this.authorComment = this.authService.getUsernameFromToken();
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


  async openModal(trackId: string) {
    const modal = this.modalController.create({
      component: AddCommentPage,
      componentProps: {
        trackId: trackId
      }
    });
    return await (await modal).present();
  }

  async editTrackModal(trackId: string) {
    const modal = this.modalController.create({
      component: EditTrackPage,
      componentProps: {
        trackId: trackId
      }
    });
    return await (await modal).present();
  }



  getRatingArray(rating: number): number[] {
    return Array(rating);
  }

  getEmptyRatingArray(rating: number): number[] {
    return Array(5 - rating);
  }

  async deleteComment(trackId: string, commentId: string) {
    const confirmation = await this.warn();

    if(confirmation){
      this.aspoticServ.deleteComment(trackId, commentId).subscribe(
        () => {
          console.log('Comment deleted successfully');
          this.showSuccessMessage("Comment deleted successfully")
          this.dismiss();
          this.platform.ready().then(() => {
            window.location.reload();
          });
        },
        error => {
          console.error(error);
          this.showError("There was a problem adding the comment")
          this.dismiss();
        }
      );
    } else { return; }
    location.reload;
  }


  async warn() {
    return new Promise(async (resolve) => {
      const confirm = await this.alertController.create({
        header: 'Delete comment',
        message: 'Are you sure that you want to delete this comment?',
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
