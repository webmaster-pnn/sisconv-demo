import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelVeiculosComponent } from './del-veiculos.component';

describe('DelVeiculosComponent', () => {
  let component: DelVeiculosComponent;
  let fixture: ComponentFixture<DelVeiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelVeiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
