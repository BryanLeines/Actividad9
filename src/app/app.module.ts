import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarPostsComponent } from './listar-posts/listar-posts.component';
import { NuevoPostsComponent } from './nuevo-post/nuevo-post.component';
import { NgxsModule } from '@ngxs/store';
//import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ListarPostsComponent,
    NuevoPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
