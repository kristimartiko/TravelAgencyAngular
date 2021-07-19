import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsmanagmentComponent } from './tripsmanagment.component';

describe('TripsmanagmentComponent', () => {
  let component: TripsmanagmentComponent;
  let fixture: ComponentFixture<TripsmanagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripsmanagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsmanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
