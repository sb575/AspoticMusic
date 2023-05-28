import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ModalController, NavParams, Platform, ToastController } from '@ionic/angular';
import { CommentData, Track } from '../../models/Track';
import { AspoticserviceService } from '../../services/aspoticservice.service';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.page.html',
  styleUrls: ['./add-comment.page.scss'],
})
export class AddCommentPage implements OnInit {

  formValidation: FormGroup | undefined;
  userId: string = '';
  trackId!: string;
  track!: Observable<Track>;
  trackComment!: Track;

  form!: FormGroup;
  author!: string;
  comment!: string;
  rating!: string;


  formValidationMessages = {
   'author': [
     { type: 'required', message: 'Author is a required field.'},
   ],
   'comment': [
     { type: 'required', message: 'Comment is a required field.' },
     { type: 'maxlength', message: 'The maximum length of a comment is 1000 characters.' }
   ],
   'rating': [
    { type: 'required', message: 'Rating is a required field.' },
  ]
 };

  constructor(private platform: Platform, private formBuilder: FormBuilder, private aspoticServ: AspoticserviceService, public authService: AuthService, private navParams: NavParams, public modalController: ModalController, private toastController: ToastController) {
    this.formValidation = this.formBuilder.group({
      author: ['', [Validators.required]],
      comment: ['', Validators.compose([Validators.required, Validators.maxLength(1000)])],
      rating: ['', [Validators.required]]
    });
  }

  newComment: CommentData = {
    comment: '',
    rating: 0,
    _id: '',
    author: '',
    createdOn: new Date(),
    userId: ''
  };


  ngOnInit() {
    this.formValidation = this.formBuilder.group({
      author: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      comment: new FormControl('', Validators.compose([
        Validators.maxLength(1000),
        Validators.required
      ])),
      rating: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });

    this.userId? this.authService.getUserIdFromToken(): null
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

  async onSubmit(value: {}): Promise<void> {
      try {
        const trackId = this.trackId = this.navParams.get('trackId');
        const comment = this.newComment;
        this.newComment.userId = this.userId
        this.newComment.createdOn = new Date();

        const position = await Geolocation.getCurrentPosition();
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        const accuracy = position.coords.accuracy;

        comment.longitude = longitude;
        comment.latitude = latitude;
        comment.accuracy = accuracy;

        this.aspoticServ.addCommentToTrack(trackId, comment)
          .subscribe((comment) => {
            console.log(comment);
            this.newComment = {
              comment: '',
              rating: 0,
              _id: '',
              author: '',
              createdOn: new Date(),
              userId: ''
            };
          });
          this.showSuccessMessage("Comment added successfully")
          this.dismiss();
          this.platform.ready().then(() => {
            location.reload();
          });
      } catch (error) {
        console.error(error);
        this.showError("There was a problem adding the comment")
        this.dismiss();
      }
    }
}

