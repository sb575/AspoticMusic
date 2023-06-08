import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackDetailsPage } from './track-details.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

describe('TrackDetailsPage', () => {
  let component: TrackDetailsPage;
  let fixture: ComponentFixture<TrackDetailsPage>;

  beforeEach(async () => {
    const activatedRouteStub = {
      paramMap: new Subject(),
      queryParamMap: new Subject(),
      data: new Subject(),
      queryParams: new Subject(),
      fragment: new Subject(),
      outlet: '',
      component: null,
      routeConfig: null,
      root: null,
      parent: null,
      firstChild: null,
      children: [],
      pathFromRoot: [],
      subscribe: () => {}
    };

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase),
        CommonModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ],
      declarations: [TrackDetailsPage]
    }).compileComponents();

    fixture = TestBed.createComponent(TrackDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
