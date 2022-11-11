import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuziComponent } from './vuzi.component';

describe('VuziComponent', () => {
  let component: VuziComponent;
  let fixture: ComponentFixture<VuziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VuziComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VuziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
