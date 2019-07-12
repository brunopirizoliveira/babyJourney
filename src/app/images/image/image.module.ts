import { NgModule } from '@angular/core';
import { ImageComponent } from './image.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [ImageComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [ ImageComponent ]

})

export class ImageModule {}