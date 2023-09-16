import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindusSectionComponent } from './findus-section.component';

describe('FindusSectionComponent', () => {
  let component: FindusSectionComponent;
  let fixture: ComponentFixture<FindusSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindusSectionComponent]
    });
    fixture = TestBed.createComponent(FindusSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
