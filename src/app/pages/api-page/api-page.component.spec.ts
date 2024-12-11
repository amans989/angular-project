import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDataComponent } from './api-page.component';

describe('ApiPageComponent', () => {
  let component: ApiDataComponent;
  let fixture: ComponentFixture<ApiDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
