import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagesaleComponent } from './homepagesale.component';

describe('HomepagesaleComponent', () => {
  let component: HomepagesaleComponent;
  let fixture: ComponentFixture<HomepagesaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepagesaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepagesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
