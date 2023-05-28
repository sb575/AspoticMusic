import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formValidation: FormGroup | undefined;

  formValidationMessages = {
   'username': [
     { type: 'required', message: 'Email is a required field.' },
     { type: 'pattern', message: 'The email format is not correct.' }
   ],
   'password': [
     { type: 'required', message: 'Password is a required field.' },
     { type: 'minlength', message: 'The minimum length of a password is 6 characters.' }
   ]
 };


  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder, private modalController: ModalController, private toastController: ToastController) {
    this.formValidation = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  form!: FormGroup;
  username!: string;
  password!: string;


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

  tryLogin(value: {username: string, password: string}): void {
    this.authService.login(value)
      .subscribe(
        result => {
          console.log('Successful login');

        },
        error => {
          console.error('Failed to sign in', error);
        }
      );

      this.authService.doLogin(value)
      .then(res => {
        this.showSuccessMessage("Successful login")
        this.dismiss();
        this.router.navigate(["/tabs"]);
      }, err => {
        if(err.code == 'auth/user-not-found'){
          this.showError("There is no user record that corresponds to the email entered")
        }

        if(err.code == 'auth/wrong-password'){
          this.showError("The password entered is not correct")
        }
        console.log(err);
      })
  }



}
