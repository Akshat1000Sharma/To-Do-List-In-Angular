import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyDeletedTasksComponent } from './recently-deleted-tasks.component';

describe('RecentlyDeletedTasksComponent', () => {
  let component: RecentlyDeletedTasksComponent;
  let fixture: ComponentFixture<RecentlyDeletedTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentlyDeletedTasksComponent]
    });
    fixture = TestBed.createComponent(RecentlyDeletedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
