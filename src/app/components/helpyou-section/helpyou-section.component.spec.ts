import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpyouSectionComponent } from './helpyou-section.component';

describe('HelpyouSectionComponent', () => {
  let component: HelpyouSectionComponent;
  let fixture: ComponentFixture<HelpyouSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpyouSectionComponent]
    });
    fixture = TestBed.createComponent(HelpyouSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
