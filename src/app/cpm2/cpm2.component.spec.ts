import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cpm2Component } from './cpm2.component';

describe('Cpm2Component', () => {
  let component: Cpm2Component;
  let fixture: ComponentFixture<Cpm2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cpm2Component]
    });
    fixture = TestBed.createComponent(Cpm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
