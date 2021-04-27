import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasPesquisaComponent } from './compras-pesquisa.component';

describe('ComprasPesquisaComponent', () => {
  let component: ComprasPesquisaComponent;
  let fixture: ComponentFixture<ComprasPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprasPesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
