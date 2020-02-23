import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelProprietariosComponent } from './del-proprietarios.component';

describe('DelProprietariosComponent', () => {
  let component: DelProprietariosComponent;
  let fixture: ComponentFixture<DelProprietariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelProprietariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelProprietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
