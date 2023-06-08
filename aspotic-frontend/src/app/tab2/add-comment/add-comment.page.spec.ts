import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, NavParams } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { AddCommentPage } from './add-comment.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

describe('AddCommentPage', () => {
  let component: AddCommentPage;
  let fixture: ComponentFixture<AddCommentPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AddCommentPage],
      imports: [HttpClientTestingModule, IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebase), ReactiveFormsModule],
      providers: [NavParams]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the page title', () => {
    const titleElement = fixture.debugElement.query(By.css('ion-title')).nativeElement;
    expect(titleElement.textContent).toContain('Add comment');
  });

  it('should disable the "Add comment" button when the form is invalid', () => {
    component.formValidation.get('author').setValue('John Doe');
    component.formValidation.get('comment').setValue('Test comment');
    component.formValidation.get('rating').setValue(5);
    fixture.detectChanges();

    const submitButton = fixture.debugElement.query(By.css('ion-button[type="submit"]')).nativeElement;
    expect(submitButton.disabled).toBeFalsy();

    component.formValidation.get('author').setValue('');
    fixture.detectChanges();

    expect(submitButton.disabled).toBeTruthy();
  });
});
