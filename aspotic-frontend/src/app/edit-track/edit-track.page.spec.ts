import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTrackPage } from './edit-track.page';

describe('EditTrackPage', () => {
  let component: EditTrackPage;
  let fixture: ComponentFixture<EditTrackPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditTrackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
