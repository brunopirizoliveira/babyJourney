import { NgModule } from "@angular/core";
import { ImageListComponent } from './image-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FilterModule } from './filter/filter-module';
import { ImageComponent } from '../image/image.component';
import { ImageModule } from '../image/image.module';

@NgModule({
    declarations: [
        ImageListComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FilterModule,
        ImageModule
    ],
    exports: [
        ImageListComponent
    ]
})

export class ImageListModule {}