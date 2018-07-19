import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { CardComponent } from "./card/card.component";
import { HomePageComponent } from "./home-page.component";

@NgModule({
    declarations: [SearchBarComponent, CardComponent, HomePageComponent],
    imports: [BrowserModule, RouterModule],
    exports: [HomePageComponent]
})
export class HomePageModule { }