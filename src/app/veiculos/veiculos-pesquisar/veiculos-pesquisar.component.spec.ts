import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosPesquisarComponent } from './veiculos-pesquisar.component';

describe('VeiculosPesquisarComponent', () => {
  let component: VeiculosPesquisarComponent;
  let fixture: ComponentFixture<VeiculosPesquisarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculosPesquisarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculosPesquisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
