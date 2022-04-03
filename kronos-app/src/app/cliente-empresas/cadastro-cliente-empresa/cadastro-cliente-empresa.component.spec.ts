import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroClienteEmpresaComponent } from './cadastro-cliente-empresa.component';

describe('CadastroClienteEmpresaComponent', () => {
  let component: CadastroClienteEmpresaComponent;
  let fixture: ComponentFixture<CadastroClienteEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroClienteEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroClienteEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
