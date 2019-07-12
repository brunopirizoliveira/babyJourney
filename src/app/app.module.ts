import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared/header/header.module';
import { ImageModule } from './images/image/image.module';
import { ImageListModule } from './images/image-list/image-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    ImageModule,
    ImageListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
