import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeParticipantsSortieComponent } from './liste-participants-sortie.component';

describe('ListeParticipantsSortieComponent', () => {
  let component: ListeParticipantsSortieComponent;
  let fixture: ComponentFixture<ListeParticipantsSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeParticipantsSortieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeParticipantsSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
