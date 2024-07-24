import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvhomeComponent } from './tvhome.component';

describe('TvhomeComponent', () => {
  let component: TvhomeComponent;
  let fixture: ComponentFixture<TvhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TvhomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
