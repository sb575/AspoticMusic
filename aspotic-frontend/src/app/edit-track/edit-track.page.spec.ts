import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTrackPage } from './edit-track.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { IonicModule, NavParams } from '@ionic/angular';
import { environment } from 'src/environments/environment';

describe('EditTrackPage', () => {
  let component: EditTrackPage;
  let fixture: ComponentFixture<EditTrackPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebase)],
      providers: [NavParams]
    }).compileComponents();

    fixture = TestBed.createComponent(EditTrackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
