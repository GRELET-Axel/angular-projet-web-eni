import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSortieAjoutComponent } from './dialog-sortie-ajout.component';

describe('DialogSortieAjoutComponent', () => {
  let component: DialogSortieAjoutComponent;
  let fixture: ComponentFixture<DialogSortieAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSortieAjoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSortieAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
