import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraCadastroComponent } from './compra-cadastro.component';

describe('CompraCadastroComponent', () => {
  let component: CompraCadastroComponent;
  let fixture: ComponentFixture<CompraCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
