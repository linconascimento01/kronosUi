import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuClienteEmpresaComponent } from './menu-cliente-empresa.component';

describe('MenuClienteEmpresaComponent', () => {
  let component: MenuClienteEmpresaComponent;
  let fixture: ComponentFixture<MenuClienteEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuClienteEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuClienteEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
