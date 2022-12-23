import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalmarksRegisterComponent } from './internalmarks-register.component';

describe('InternalmarksRegisterComponent', () => {
  let component: InternalmarksRegisterComponent;
  let fixture: ComponentFixture<InternalmarksRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalmarksRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalmarksRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
