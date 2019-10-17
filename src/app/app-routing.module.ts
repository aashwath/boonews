import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewsListComponent } from "./news-list/news-list.component";
import { TabsComponent } from "./tabs/tabs.component";

const appRoutes: Routes = [
  {
    path: "headlines",
    component: TabsComponent,
    children: [
      { path: ":link", component: NewsListComponent },
      { path: "india", component: NewsListComponent },
    ]
  },
  { path: "", redirectTo: "headlines/india", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
