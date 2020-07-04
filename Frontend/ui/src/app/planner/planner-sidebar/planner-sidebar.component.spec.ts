import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerSidebarComponent } from './planner-sidebar.component';

describe('PlannerSidebarComponent', () => {
  let component: PlannerSidebarComponent;
  let fixture: ComponentFixture<PlannerSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlannerSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
