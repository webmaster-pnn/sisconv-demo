import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProprietariosComponent } from './add-proprietarios.component';

describe('AddProprietariosComponent', () => {
  let component: AddProprietariosComponent;
  let fixture: ComponentFixture<AddProprietariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProprietariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProprietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
