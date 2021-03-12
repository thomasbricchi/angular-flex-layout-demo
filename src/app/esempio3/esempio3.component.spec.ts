import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esempio3Component } from './esempio3.component';

describe('Esempio3Component', () => {
  let component: Esempio3Component;
  let fixture: ComponentFixture<Esempio3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Esempio3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Esempio3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
