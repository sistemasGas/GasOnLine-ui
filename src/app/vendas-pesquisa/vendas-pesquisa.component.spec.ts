import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasPesquisaComponent } from './vendas-pesquisa.component';

describe('VendasPesquisaComponent', () => {
  let component: VendasPesquisaComponent;
  let fixture: ComponentFixture<VendasPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendasPesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendasPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
