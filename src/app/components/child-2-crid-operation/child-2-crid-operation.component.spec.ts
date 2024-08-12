import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2CridOperationComponent } from './child-2-crid-operation.component';

describe('Child2CridOperationComponent', () => {
  let component: Child2CridOperationComponent;
  let fixture: ComponentFixture<Child2CridOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child2CridOperationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child2CridOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
