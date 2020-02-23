import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProprietariosComponent } from './edit-proprietarios.component';

describe('EditProprietariosComponent', () => {
  let component: EditProprietariosComponent;
  let fixture: ComponentFixture<EditProprietariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProprietariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProprietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
