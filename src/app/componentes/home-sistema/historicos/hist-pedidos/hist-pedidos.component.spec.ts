import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistPedidosComponent } from './hist-pedidos.component';

describe('HistPedidosComponent', () => {
  let component: HistPedidosComponent;
  let fixture: ComponentFixture<HistPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
