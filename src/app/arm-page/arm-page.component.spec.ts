import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmPageComponent } from './arm-page.component';

describe('ArmPageComponent', () => {
  let component: ArmPageComponent;
  let fixture: ComponentFixture<ArmPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
