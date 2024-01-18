import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCounterComponent } from './color-counter.component';

describe('ColorCounterComponent', () => {
  let component: ColorCounterComponent;
  let fixture: ComponentFixture<ColorCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
