import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualisationSuiteComponent } from './actualisation-suite.component';

describe('ActualisationSuiteComponent', () => {
  let component: ActualisationSuiteComponent;
  let fixture: ComponentFixture<ActualisationSuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualisationSuiteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualisationSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
