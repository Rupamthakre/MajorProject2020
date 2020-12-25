import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingComponent } from './starting.component';

describe('StartingComponent', () => {
  let component: StartingComponent;
  let fixture: ComponentFixture<StartingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartingComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
