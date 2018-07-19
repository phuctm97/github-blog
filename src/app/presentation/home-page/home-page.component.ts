import { Title } from "@angular/platform-browser";
import { Component, OnInit } from "@angular/core";
import { APP_TITLE } from "../../configs/constants";
import { PostMetadata } from "../../core/models/post-metadata.model";
import { PostService } from "../../core/services/post.service";

@Component({
    selector: "home-page",
    templateUrl: "home-page.component.html",
})
export class HomePageComponent implements OnInit {
    posts: PostMetadata[];

    constructor(
        private postService: PostService,
        private title: Title) { }

    ngOnInit() {
        // update app title
        this.title.setTitle(APP_TITLE);

        // fetch posts
        this.postService.getAllPostMetadata().subscribe(posts => this.posts = posts);
    }
}