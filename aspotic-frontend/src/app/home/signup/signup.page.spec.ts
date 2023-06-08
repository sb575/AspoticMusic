import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule, NavParams } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SignupPage } from './signup.page';

describe('SignupPage', () => {
  let component: SignupPage;
  let fixture: ComponentFixture<SignupPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SignupPage],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, HttpClientTestingModule, AngularFireModule.initializeApp(environment.firebase)],
      providers: [NavParams]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the page title', () => {
    const titleElement = fixture.debugElement.query(By.css('ion-title')).nativeElement;
    expect(titleElement.textContent).toContain('Sign Up');
  });

  it('should disable the "Sign Up" button when the form is invalid', () => {
    component.formValidation.get('username').setValue('test@example.com');
    component.formValidation.get('password').setValue('password');
    fixture.detectChanges();

    const signUpButton = fixture.debugElement.query(By.css('ion-button[type="submit"]')).nativeElement;
    expect(signUpButton.disabled).toBeFalsy();

    component.formValidation.get('username').setValue('');
    fixture.detectChanges();

    expect(signUpButton.disabled).toBeTruthy();
  });
});
