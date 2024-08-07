import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCridComponent } from './employee-crid.component';

describe('EmployeeCridComponent', () => {
  let component: EmployeeCridComponent;
  let fixture: ComponentFixture<EmployeeCridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
