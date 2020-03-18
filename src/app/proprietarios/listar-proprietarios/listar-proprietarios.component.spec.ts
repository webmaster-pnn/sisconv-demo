import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProprietariosComponent } from './listar-proprietarios.component';

describe('ListarProprietariosComponent', () => {
  let component: ListarProprietariosComponent;
  let fixture: ComponentFixture<ListarProprietariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarProprietariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProprietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
