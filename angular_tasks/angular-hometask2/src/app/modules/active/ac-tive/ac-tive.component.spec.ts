import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcTiveComponent } from './ac-tive.component';

describe('AcTiveComponent', () => {
  let component: AcTiveComponent;
  let fixture: ComponentFixture<AcTiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcTiveComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcTiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be active ', () => {
    expect(component.current_page_flag).toBe('active');
  });
});
