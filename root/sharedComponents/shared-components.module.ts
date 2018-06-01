import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"
import { SlideShowComponent } from './slideshow/slideshow.component';
import { ArticleComponent } from "./articles/article.component"
@NgModule({
    declarations: [
        SlideShowComponent,
        ArticleComponent
    ],
    imports: [
      CommonModule

    ],
    exports: [
        SlideShowComponent,
        ArticleComponent
    ]
})
export class SharedModule{
}
