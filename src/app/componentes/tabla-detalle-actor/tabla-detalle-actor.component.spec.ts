import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDetalleActorComponent } from './tabla-detalle-actor.component';

describe('TablaDetalleActorComponent', () => {
  let component: TablaDetalleActorComponent;
  let fixture: ComponentFixture<TablaDetalleActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaDetalleActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDetalleActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
