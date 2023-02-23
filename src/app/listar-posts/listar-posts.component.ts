import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Posts } from '../store/posts.model';
import { RemovePost } from '../store/posts.actions';
@Component({
  selector: 'app-listar-posts',
  templateUrl: '../listar-posts/listar-posts.component.html',
  styleUrls: ['../listar-posts/listar-posts.component.css']
})
export class ListarPostsComponent implements OnInit {
  public posts: Observable<Posts>;
  constructor(
    private store: Store
  ) {
    this.posts = this.store.select(state => state.posts.posts);
  }
  ngOnInit() {
  }
  public removePost(id: string) {
    this.store.dispatch(new RemovePost(id));
  }
}