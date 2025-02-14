import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentCreateComponent } from './establishment-create.component';

describe('EstablishmentCreateComponent', () => {
  let component: EstablishmentCreateComponent;
  let fixture: ComponentFixture<EstablishmentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstablishmentCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstablishmentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
