import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPostsComponent } from './nuevo-post.component';

describe('NuevoPostsComponent', () => {
  let component: NuevoPostsComponent;
  let fixture: ComponentFixture<NuevoPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
