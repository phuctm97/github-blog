import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { PostPageComponent } from "./post-page/post-page.component";

const routes: Routes = [
    { path: "home", component: HomePageComponent },
    { path: "posts/:id", component: PostPageComponent },
    { path: "", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PresentationRoutingModule { }