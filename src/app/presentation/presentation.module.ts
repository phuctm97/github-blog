import { NgModule } from "@angular/core";
import { AppHeaderComponent } from "./app-header/app-header.component";
import { HomePageModule } from "./home-page/home-page.module";
import { PostPageModule } from "./post-page/post-page.module";

@NgModule({
    declarations: [AppHeaderComponent],
    imports: [HomePageModule, PostPageModule],
    exports: [AppHeaderComponent]
})
export class PresentationModule { }