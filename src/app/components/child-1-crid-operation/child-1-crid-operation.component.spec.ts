import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1CridOperationComponent } from './child-1-crid-operation.component';

describe('Child1CridOperationComponent', () => {
  let component: Child1CridOperationComponent;
  let fixture: ComponentFixture<Child1CridOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child1CridOperationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child1CridOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
