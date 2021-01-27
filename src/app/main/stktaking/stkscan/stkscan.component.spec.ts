import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StkscanComponent } from './stkscan.component';

describe('StkscanComponent', () => {
  let component: StkscanComponent;
  let fixture: ComponentFixture<StkscanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StkscanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StkscanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
