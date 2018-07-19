import { Component, Input } from "@angular/core";
import { PostMetadata } from "../../../core/models/post-metadata.model";

@Component({
    selector: "card",
    templateUrl: "card.component.html",
    styleUrls: ["card.component.scss"],
})
export class CardComponent {
    @Input() post: PostMetadata;
}