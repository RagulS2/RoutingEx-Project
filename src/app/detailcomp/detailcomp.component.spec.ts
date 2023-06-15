import { ComponentFixture, TestBed } from '@angular/core/testing';

import {DetailcompComponent} from './detailcomp.component';

describe('DetailcompComponent', () => {
  let component: DetailcompComponent;
  let fixture: ComponentFixture<DetailcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailcompComponent]
    });
    fixture = TestBed.createComponent(DetailcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
