import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsDialogComponent } from './sams-dialog.component';

describe('SamsDialogComponent', () => {
  let component: SamsDialogComponent;
  let fixture: ComponentFixture<SamsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
