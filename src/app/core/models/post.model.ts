import { PostMetadata } from "./post-metadata.model";

export interface Post {
    metadata: PostMetadata;
    content: string;
}