import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarConsultoriaComponent } from './cadastrar-consultoria.component';

describe('CadastrarConsultoriaComponent', () => {
  let component: CadastrarConsultoriaComponent;
  let fixture: ComponentFixture<CadastrarConsultoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarConsultoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarConsultoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
