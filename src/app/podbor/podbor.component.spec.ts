import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodborComponent } from './podbor.component';

describe('PodborComponent', () => {
  let component: PodborComponent;
  let fixture: ComponentFixture<PodborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodborComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
