import { TestBed } from '@angular/core/testing';

import { ModelActuaService } from './model-actua.service';

describe('ModelActuaService', () => {
  let service: ModelActuaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelActuaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
