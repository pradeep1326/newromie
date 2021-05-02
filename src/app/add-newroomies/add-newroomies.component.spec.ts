import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewroomiesComponent } from './add-newroomies.component';

describe('AddNewroomiesComponent', () => {
  let component: AddNewroomiesComponent;
  let fixture: ComponentFixture<AddNewroomiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewroomiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewroomiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
