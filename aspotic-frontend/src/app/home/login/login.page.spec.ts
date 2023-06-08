import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [ReactiveFormsModule, HttpClientTestingModule, IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebase)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the page title', () => {
    const titleElement = fixture.debugElement.query(By.css('ion-title')).nativeElement;
    expect(titleElement.textContent).toContain('Sing In');
  });

  it('should disable the "Sign In" button when the form is invalid', () => {
    component.formValidation.get('username').setValue('test@example.com');
    component.formValidation.get('password').setValue('password');
    fixture.detectChanges();

    const signInButton = fixture.debugElement.query(By.css('ion-button[type="submit"]')).nativeElement;
    expect(signInButton.disabled).toBeFalsy();

    component.formValidation.get('username').setValue('');
    fixture.detectChanges();

    expect(signInButton.disabled).toBeTruthy();
  });
});
