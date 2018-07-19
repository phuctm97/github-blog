import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as markdownit from "markdown-it";
import * as hljs from "highlight.js";

@Injectable()
export class MarkdownService {
    private md: markdownit.MarkdownIt;

    constructor() {
        this.md = markdownit({
            html: false,
            xhtmlOut: false,
            breaks: true,
            linkify: false,
            typographer: true,
            langPrefix: "language-",
            highlight: (value, lang) => {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        const highlightedValue = hljs.highlight(lang, value);
                        return `<pre><code class=\"hljs\">${highlightedValue.value.trim()}</code></pre>`;
                    } catch (e) { }
                }
                return `<pre><code class=\"hljs\">${value}</code></pre>`;
            }
        })
            .use(require("markdown-it-emoji"))
            .use(require("markdown-it-sub"))
            .use(require("markdown-it-sup"))
            .use(require("markdown-it-ins"))
            .use(require("markdown-it-mark"))
            .use(require("markdown-it-footnote"))
            .use(require("markdown-it-deflist"))
            .use(require("markdown-it-abbr"));
        this.md.renderer.rules.table_open = function (tokens, idx) {
            return "<table class=\"hljs-table\">";
        };
    }

    parseSync(markdownString: string): string {
        return this.md.render(markdownString);
    }

    parseAsync(markdownString: string): Observable<string> {
        return new Observable(observer => {
            observer.next(this.md.render(markdownString));
            observer.complete();
        });
    }
}