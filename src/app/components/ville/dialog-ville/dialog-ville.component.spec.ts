import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVilleComponent } from './dialog-ville.component';

describe('DialogVilleComponent', () => {
  let component: DialogVilleComponent;
  let fixture: ComponentFixture<DialogVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
