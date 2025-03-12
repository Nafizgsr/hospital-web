import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDoctorComponentComponent } from './find-doctor-component.component';

describe('FindDoctorComponentComponent', () => {
  let component: FindDoctorComponentComponent;
  let fixture: ComponentFixture<FindDoctorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindDoctorComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindDoctorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
