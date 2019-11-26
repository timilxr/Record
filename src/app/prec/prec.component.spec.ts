import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecComponent } from './prec.component';

describe('PrecComponent', () => {
  let component: PrecComponent;
  let fixture: ComponentFixture<PrecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
