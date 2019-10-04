import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SFormCompComponent } from './s-form-comp.component';

describe('SFormCompComponent', () => {
  let component: SFormCompComponent;
  let fixture: ComponentFixture<SFormCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SFormCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SFormCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
