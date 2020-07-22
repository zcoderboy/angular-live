import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisionDetailComponent } from './prevision-detail.component';

describe('PrevisionDetailComponent', () => {
  let component: PrevisionDetailComponent;
  let fixture: ComponentFixture<PrevisionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevisionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevisionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
