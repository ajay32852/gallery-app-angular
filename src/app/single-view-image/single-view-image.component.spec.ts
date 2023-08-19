import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleViewImageComponent } from './single-view-image.component';

describe('SingleViewImageComponent', () => {
  let component: SingleViewImageComponent;
  let fixture: ComponentFixture<SingleViewImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleViewImageComponent]
    });
    fixture = TestBed.createComponent(SingleViewImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
