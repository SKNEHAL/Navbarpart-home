import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondpartComponent } from './secondpart.component';

describe('SecondpartComponent', () => {
  let component: SecondpartComponent;
  let fixture: ComponentFixture<SecondpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondpartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
