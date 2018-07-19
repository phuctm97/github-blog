import { Pipe, PipeTransform } from "@angular/core";
import { SafeHtml, DomSanitizer } from "@angular/platform-browser";

@Pipe({
    name: "santinize"
})
export class SantinizePipe implements PipeTransform {
    constructor(private santinizer: DomSanitizer) { }

    transform(value: string): SafeHtml {
        return this.santinizer.bypassSecurityTrustHtml(value);
    }
}