import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SantinizePipe } from "./santinize.pipe";

@NgModule({
    declarations: [SantinizePipe],
    imports: [BrowserModule],
    exports: [SantinizePipe]
})
export class SharedModule { }