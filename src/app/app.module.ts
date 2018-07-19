import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { PresentationModule } from "./presentation/presentation.module";
import { PresentationRoutingModule } from "./presentation/presentation-routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, PresentationModule, PresentationRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }