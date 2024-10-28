import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickersDialogComponent } from './pickers-dialog.component';

describe('PickersDialogComponent', () => {
  let component: PickersDialogComponent;
  let fixture: ComponentFixture<PickersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickersDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
