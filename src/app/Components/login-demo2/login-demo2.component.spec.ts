import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDemo2Component } from './login-demo2.component';

describe('LoginDemo2Component', () => {
  let component: LoginDemo2Component;
  let fixture: ComponentFixture<LoginDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
