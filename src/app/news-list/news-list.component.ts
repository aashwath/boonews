import { Component, OnInit, OnChanges, Input } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { NewsService } from "../news.service";
import { switchMap } from "rxjs/operators";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.scss"],
  animations: [
    trigger("simpleFadeAnimation", [
      state("in", style({ opacity: 1 })),
      
      //transition when list populates and disappears
      transition("void <=> *", [
        style({ opacity: 0 }),
        animate("800ms ease-in-out")
      ])
    ])
  ]
})

export class NewsListComponent implements OnInit {
  newsList: Array<any>;
  routeLink = "";

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.routeLink = params.get("link");
      this.newsService
        .getNews(this.routeLink)
        .subscribe(data => (this.newsList = data["articles"]));
    });
  }
  openArticle = (index: number) => {
    this.router.navigate([`${this.routeLink}/article/${index}`]);
    this.newsService.getArticle(this.newsList[index]);
  };
}
