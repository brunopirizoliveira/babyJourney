import { NgModule } from '@angular/core';
import { FilterComponent } from './filter/filter.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [FilterComponent],
    imports: [
        CommonModule
    ],
    exports: [FilterComponent]
})
export class FilterModule {}