import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterpartComponent } from './masterpart.component';

describe('MasterpartComponent', () => {
  let component: MasterpartComponent;
  let fixture: ComponentFixture<MasterpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterpartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
