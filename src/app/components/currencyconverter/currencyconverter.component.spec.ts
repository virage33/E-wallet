import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyconverterComponent } from './currencyconverter.component';

describe('CurrencyconverterComponent', () => {
  let component: CurrencyconverterComponent;
  let fixture: ComponentFixture<CurrencyconverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyconverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
