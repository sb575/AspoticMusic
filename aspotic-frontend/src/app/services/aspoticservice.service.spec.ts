import { TestBed } from '@angular/core/testing';
import { AspoticserviceService } from './aspoticservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

describe('AspoticserviceService', () => {
  let service: AspoticserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebase)]
    });
    service = TestBed.inject(AspoticserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

