import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Angular Material
import { MatTabsModule } from "@angular/material/tabs";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";

import { AppComponent } from "./app.component";
import { TabsComponent } from "./tabs/tabs.component";
import { NewsService } from "./news.service";
import { NewsListComponent } from "./news-list/news-list.component";
import { ShortenPipe } from "./shorten.pipe";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    AppRoutingModule,
    MatListModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    TabsComponent,
    NewsListComponent,
    ShortenPipe
  ],
  bootstrap: [AppComponent],
  providers: [NewsService]
})
export class AppModule {}
