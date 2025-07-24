import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificBook } from './specific-book';

describe('SpecificBook', () => {
  let component: SpecificBook;
  let fixture: ComponentFixture<SpecificBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificBook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificBook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
