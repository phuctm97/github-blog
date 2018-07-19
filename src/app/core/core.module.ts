import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { PostService } from "./services/post.service";
import { MarkdownService } from "./services/markdown.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [PostService, MarkdownService]
})
export class CoreModule { }