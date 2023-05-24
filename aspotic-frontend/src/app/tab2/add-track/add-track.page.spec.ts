import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTrackPage } from './add-track.page';

describe('AddTrackPage', () => {
  let component: AddTrackPage;
  let fixture: ComponentFixture<AddTrackPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddTrackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
