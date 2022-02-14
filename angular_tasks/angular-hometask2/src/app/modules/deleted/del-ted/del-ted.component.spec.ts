import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelTedComponent } from './del-ted.component';

describe('DelTedComponent', () => {
  let component: DelTedComponent;
  let fixture: ComponentFixture<DelTedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DelTedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelTedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be deleted ', () => {
    expect(component.current_page_flag).toBe('deleted');
  });
});
