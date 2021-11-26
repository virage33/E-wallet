import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalpageComponent } from './withdrawalpage.component';

describe('WithdrawalpageComponent', () => {
  let component: WithdrawalpageComponent;
  let fixture: ComponentFixture<WithdrawalpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawalpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
