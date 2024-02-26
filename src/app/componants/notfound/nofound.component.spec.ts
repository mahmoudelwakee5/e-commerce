import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NofoundComponent } from './nofound.component';

describe('NofoundComponent', () => {
  let component: NofoundComponent;
  let fixture: ComponentFixture<NofoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NofoundComponent]
    });
    fixture = TestBed.createComponent(NofoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
