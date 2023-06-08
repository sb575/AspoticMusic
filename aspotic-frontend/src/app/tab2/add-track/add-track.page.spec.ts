import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTrackPage } from './add-track.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AddTrackPage', () => {
  let component: AddTrackPage;
  let fixture: ComponentFixture<AddTrackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTrackPage],
      imports: [IonicModule.forRoot(), FormsModule, ReactiveFormsModule, HttpClientTestingModule, AngularFireModule.initializeApp(environment.firebase)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the page title', () => {
    const titleElement = fixture.debugElement.query(By.css('ion-title')).nativeElement;
    expect(titleElement.textContent).toContain('Add track');
  });

  it('should have an "Add track" button', () => {
    const addButton = fixture.debugElement.query(By.css('.custom-btn[type="submit"]')).nativeElement;
    expect(addButton.textContent).toContain('Add track');
  });



  it('should have image preview if imageUrl is set', () => {
    const imageUrl = 'https://example.com/image.jpg';
    component.trackForm.patchValue({ imageUrl });
    fixture.detectChanges();

    const imagePreview = fixture.debugElement.query(By.css('.image-preview'));
    expect(imagePreview).toBeTruthy();
    expect(imagePreview.nativeElement.getAttribute('src')).toBe(imageUrl);
  });

  it('should have image placeholder if imageUrl is not set', () => {
    component.trackForm.patchValue({ imageUrl: null });
    fixture.detectChanges();

    const imagePlaceholder = fixture.debugElement.query(By.css('.image-preview-placeholder'));
    expect(imagePlaceholder).toBeTruthy();
  });


});
