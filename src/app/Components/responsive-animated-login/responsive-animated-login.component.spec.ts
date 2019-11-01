import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveAnimatedLoginComponent } from './responsive-animated-login.component';

describe('ResponsiveAnimatedLoginComponent', () => {
  let component: ResponsiveAnimatedLoginComponent;
  let fixture: ComponentFixture<ResponsiveAnimatedLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveAnimatedLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveAnimatedLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
