import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  formValidation: FormGroup | undefined;
  errorMessage: string = '';

  formValidationMessages = {
   'username': [
     { type: 'required', message: 'El email es un campo obligatorio.' },
     { type: 'pattern', message: 'El formato del email no es correcto.' }
   ],
   'password': [
     { type: 'required', message: 'La contraseña es un campo obligatorio.' },
     { type: 'minlength', message: 'La lóngitud mínima de una contraseña es 6 caracteres.' }
   ]
 };

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastController: ToastController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.formValidation = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
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

  trySignUp(value: { username: string; password: string; }){
    this.authService.signup(value)
    .subscribe(
      result => {
        console.log('Successful sign up');
      },
      error => {
        console.error('Failed to sign up', error);

      }
    );

    this.authService.createUser(value)
    .then(res => {
      console.log("Successful sign up");
      this.showSuccessMessage("Successful sign up, now you can sing in")
      this.dismiss();
      this.router.navigate(["/home"]);
    }, err => {
      if(err.code == 'auth/email-already-in-use'){
        this.showError("User already exists")
      }

      if(err.code == 'auth/invalid-email'){
        this.showError("The email format is incorrect")
      }

      console.log(err);
    })
  }

}
