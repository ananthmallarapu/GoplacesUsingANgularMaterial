import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispaycontainerComponent } from './dispaycontainer.component';

describe('DispaycontainerComponent', () => {
  let component: DispaycontainerComponent;
  let fixture: ComponentFixture<DispaycontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispaycontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispaycontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
