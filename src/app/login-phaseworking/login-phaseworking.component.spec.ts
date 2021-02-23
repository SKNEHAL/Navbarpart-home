import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPhaseworkingComponent } from './login-phaseworking.component';

describe('LoginPhaseworkingComponent', () => {
  let component: LoginPhaseworkingComponent;
  let fixture: ComponentFixture<LoginPhaseworkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPhaseworkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPhaseworkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
