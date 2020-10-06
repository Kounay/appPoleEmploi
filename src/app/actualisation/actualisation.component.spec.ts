import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualisationComponent } from './actualisation.component';

describe('ActualisationComponent', () => {
  let component: ActualisationComponent;
  let fixture: ComponentFixture<ActualisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
