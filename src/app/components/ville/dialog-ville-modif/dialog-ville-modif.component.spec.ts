import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVilleModifComponent } from './dialog-ville-modif.component';

describe('DialogVilleModifComponent', () => {
  let component: DialogVilleModifComponent;
  let fixture: ComponentFixture<DialogVilleModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVilleModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogVilleModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
