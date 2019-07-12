import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageListComponent } from './images/image-list/image-list.component';
import { ImageListResolver } from './images/image-list/image-resolver';

const routes: Routes = [  
  {path: 'produto', component: ImageListComponent, resolve: {images: ImageListResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
