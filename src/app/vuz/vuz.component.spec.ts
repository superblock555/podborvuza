import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuzComponent } from './vuz.component';

describe('VuzComponent', () => {
  let component: VuzComponent;
  let fixture: ComponentFixture<VuzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VuzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
