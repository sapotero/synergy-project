import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthStageComponent } from './fourth-stage.component';

describe('FourthStageComponent', () => {
  let component: FourthStageComponent;
  let fixture: ComponentFixture<FourthStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
