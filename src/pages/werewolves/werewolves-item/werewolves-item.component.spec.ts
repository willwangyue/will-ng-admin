import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentItemComponent } from './werewolves-item.component';

describe('StudentItemComponent', () => {
  let component: StudentItemComponent;
  let fixture: ComponentFixture<StudentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
