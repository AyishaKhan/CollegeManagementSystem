import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalmarkListComponent } from './internalmark-list.component';

describe('InternalmarkListComponent', () => {
  let component: InternalmarkListComponent;
  let fixture: ComponentFixture<InternalmarkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalmarkListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalmarkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
