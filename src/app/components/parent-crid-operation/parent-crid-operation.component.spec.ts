import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCridOperationComponent } from './parent-crid-operation.component';

describe('ParentCridOperationComponent', () => {
  let component: ParentCridOperationComponent;
  let fixture: ComponentFixture<ParentCridOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentCridOperationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentCridOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
