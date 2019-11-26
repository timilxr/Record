import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Int1Component } from './int1.component';

describe('Int1Component', () => {
  let component: Int1Component;
  let fixture: ComponentFixture<Int1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Int1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Int1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
