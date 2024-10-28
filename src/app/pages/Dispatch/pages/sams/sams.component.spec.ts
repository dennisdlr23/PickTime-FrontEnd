import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsComponent } from './sams.component';

describe('SamsComponent', () => {
  let component: SamsComponent;
  let fixture: ComponentFixture<SamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
