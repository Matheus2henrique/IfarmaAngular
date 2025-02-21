import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistVendasComponent } from './hist-vendas.component';

describe('HistVendasComponent', () => {
  let component: HistVendasComponent;
  let fixture: ComponentFixture<HistVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistVendasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
