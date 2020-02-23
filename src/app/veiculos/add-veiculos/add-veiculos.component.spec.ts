import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVeiculosComponent } from './add-veiculos.component';

describe('AddVeiculosComponent', () => {
  let component: AddVeiculosComponent;
  let fixture: ComponentFixture<AddVeiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVeiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
