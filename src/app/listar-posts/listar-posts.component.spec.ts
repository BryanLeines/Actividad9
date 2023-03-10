import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPostsComponent } from './listar-posts.component';

describe('ListarPostsComponent', () => {
  let component: ListarPostsComponent;
  let fixture: ComponentFixture<ListarPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
