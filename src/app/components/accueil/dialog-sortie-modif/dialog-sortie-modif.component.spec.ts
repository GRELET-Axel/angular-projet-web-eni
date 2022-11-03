import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSortieModifComponent } from './dialog-sortie-modif.component';

describe('DialogSortieModifComponent', () => {
  let component: DialogSortieModifComponent;
  let fixture: ComponentFixture<DialogSortieModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSortieModifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSortieModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
