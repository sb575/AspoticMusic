import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { By } from '@angular/platform-browser';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [HttpClientTestingModule, IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebase)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the page title', () => {
    const titleElement = fixture.debugElement.query(By.css('.custom-title')).nativeElement;
    expect(titleElement.textContent).toContain('ASPOTIC');
  });

  it('should have "Sign In" and "Sign Up" buttons', () => {
    const signInButton = fixture.debugElement.query(By.css('ion-button[slot="end"]')).nativeElement;
    expect(signInButton.textContent).toContain('Sign In');

    const signUpButton = fixture.debugElement.queryAll(By.css('ion-button[slot="end"]'))[1].nativeElement;
    expect(signUpButton.textContent).toContain('Sign Up');
  });

});
