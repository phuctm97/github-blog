import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { PostPageComponent } from "./post-page.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [PostPageComponent],
    imports: [BrowserModule, RouterModule, SharedModule],
    exports: [PostPageComponent]
})
export class PostPageModule { }