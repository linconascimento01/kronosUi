import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEmpresaComponent } from './cliente-empresa.component';

describe('ClienteEmpresaComponent', () => {
  let component: ClienteEmpresaComponent;
  let fixture: ComponentFixture<ClienteEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
