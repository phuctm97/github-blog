import { AuthorMetadata } from "./author-metadata.model";

export interface PostMetadata {
    id: string,
    title: string;
    thumbnail?: string;
    author?: AuthorMetadata;
    date?: string;
    tags?: string[];
}