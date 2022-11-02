import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCampusModifComponent } from './dialog-campus-modif.component';

describe('DialogCampusModifComponent', () => {
  let component: DialogCampusModifComponent;
  let fixture: ComponentFixture<DialogCampusModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCampusModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCampusModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
