import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGridComponent } from './my-grid.component';

describe('DtTableComponent', () => {
  let component: MyGridComponent;
  let fixture: ComponentFixture<DtTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
