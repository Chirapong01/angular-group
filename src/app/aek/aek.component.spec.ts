import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AekComponent } from './aek.component';

describe('AekComponent', () => {
  let component: AekComponent;
  let fixture: ComponentFixture<AekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
