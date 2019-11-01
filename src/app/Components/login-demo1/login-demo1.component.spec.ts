import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDemo1Component } from './login-demo1.component';

describe('LoginDemo1Component', () => {
  let component: LoginDemo1Component;
  let fixture: ComponentFixture<LoginDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
