import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, delay } from "rxjs/operators";
import { PostMetadata } from "../models/post-metadata.model";
import { AuthorMetadata } from "../models/author-metadata.model";
import { Post } from "../models/post.model";

@Injectable()
export class PostService {
    authors = new Map<string, AuthorMetadata>();
    posts = new Map<string, PostMetadata>();

    // TODO: catch error on load

    constructor(private http: HttpClient) {
        const tmpAuthors: AuthorMetadata[] = [
            {
                username: "phuctm97",
                fullname: "Minh-Phuc Tran",
                avatarUrl: "https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/57289/59344b35278f6.jpg",
            },
            {
                username: "stuurmen",
                avatarUrl: "https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/430163/5abca3a2ce2ce.jpg",
            },
            {
                username: "bluecadet",
                fullname: "Blue Cadet",
                avatarUrl: "https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/193/5a4fe55002531.jpg",
            },
            {
                username: "bonhomme",
                avatarUrl: "https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/214176/54b5857184727.jpeg",
            },
        ];
        for (let author of tmpAuthors) this.authors.set(author.username, author);

        const tmpPosts = [
            {
                id: "case-study-outrider-bomb-blast",
                title: "Case Study: Outrider Bomb Blast",
                thumbnail: "https://assets.awwwards.com/awards/images/2018/06/outrider-bomb-blast-thumbnail.jpg",
                author: this.authors.get("bluecadet"),
                date: "1 Th8 2018",
            },
            {
                id: "talk-invision-director-of-product-and-design-tom-giannattasio-on-the-design-of-tools",
                title: "Talk: InVision\'s Director of Product and Design, Tom Giannattasio on The Design of Tools",
                thumbnail: "https://assets.awwwards.com/awards/images/2018/06/tom-giannattasio-thumb.jpg",
                author: this.authors.get("phuctm97"),
                date: "21 Th10 2018",
            },
            {
                id: "case-study-black-messiah-by-bonhomme",
                title: "Case Study: Black Messiah by Bonhomme",
                thumbnail: "https://assets.awwwards.com/awards/images/2018/06/BlackMessiah-thumbnail.jpg",
                author: this.authors.get("bonhomme"),
                date: "5 Th5 2018",
            },
            {
                id: "vote-now-for-mays-site-of-the-mouth-and-win-a-years-free-pro-plan-in-the-awwwards-directory",
                title: "Vote Now for May\'s Site of the Month and Win a Year\'s Free Pro Plan in the Awwwards Directory!",
                author: this.authors.get("stuurmen"),
                date: "21 Th8 2018",
            },
            {
                id: "20-best-google-web-fonts",
                title: "20 Best Google Web Fonts",
                thumbnail: "https://assets.awwwards.com/awards/images/2018/05/best-google-fonts-thumb.jpg",
                author: this.authors.get("bluecadet"),
            },
            {
                id: "interview-minecraft-design-director-tobias-ahlin-talks-ui-and-new-technologies",
                title: "Interview: Minecraft Design Director Tobias Ahlin talks UI and New Technologies.",
                thumbnail: "https://assets.awwwards.com/awards/images/2018/05/tobias-thumb.jpg",
                date: "15 Th8 2018",
            },
        ];
        for (let post of tmpPosts) this.posts.set(post.id, post);
    }

    public getAllPostMetadata(): Observable<PostMetadata[]> {
        return of(Array.from(this.posts.values())).pipe(delay(1000));
    }

    public getPost(id: string): Observable<Post> {
        if (!this.posts.has(id)) return undefined;
        return this.http.get("assets/texts/post-sample.md", { responseType: "text" })
            .pipe(
                map(responseText => ({
                    metadata: this.posts.get(id),
                    content: responseText
                })));
    }
}