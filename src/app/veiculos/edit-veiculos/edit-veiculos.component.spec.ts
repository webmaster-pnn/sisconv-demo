import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVeiculosComponent } from './edit-veiculos.component';

describe('EditVeiculosComponent', () => {
  let component: EditVeiculosComponent;
  let fixture: ComponentFixture<EditVeiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVeiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
