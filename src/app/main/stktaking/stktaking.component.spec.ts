import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StktakingComponent } from './stktaking.component';

describe('StktakingComponent', () => {
  let component: StktakingComponent;
  let fixture: ComponentFixture<StktakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StktakingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StktakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
