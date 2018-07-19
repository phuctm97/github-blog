import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { switchMap } from "rxjs/operators";
import { APP_TITLE } from "../../configs/constants";
import { Post } from "../../core/models/post.model";
import { PostService } from "../../core/services/post.service";
import { MarkdownService } from "../../core/services/markdown.service";

@Component({
    selector: "post-page",
    templateUrl: "post-page.component.html",
    styleUrls: ["post-page.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class PostPageComponent implements OnInit {
    post: Post;
    postContentHtml: string;

    constructor(
        private route: ActivatedRoute,
        private title: Title,
        private postService: PostService,
        private markdownService: MarkdownService) {
    }

    ngOnInit() {
        // update app title
        this.title.setTitle(APP_TITLE);

        // fetch post
        this.route.paramMap
            .pipe(switchMap(params => this.postService.getPost(params.get("id"))))
            .subscribe(post => {
                this.post = post

                // convert markdown to displayable html
                this.markdownService.parseAsync(this.post.content).subscribe(res => this.postContentHtml = res);

                // update app title
                this.title.setTitle(`${this.post.metadata.title} - ${APP_TITLE}`);
            });
    }
}