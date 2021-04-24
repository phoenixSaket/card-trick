import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrangedCardsComponent } from './arranged-cards.component';

describe('ArrangedCardsComponent', () => {
  let component: ArrangedCardsComponent;
  let fixture: ComponentFixture<ArrangedCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrangedCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrangedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
