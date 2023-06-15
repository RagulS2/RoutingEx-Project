import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cpm1Component } from './cpm1.component';

describe('Cpm1Component', () => {
  let component: Cpm1Component;
  let fixture: ComponentFixture<Cpm1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cpm1Component]
    });
    fixture = TestBed.createComponent(Cpm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
