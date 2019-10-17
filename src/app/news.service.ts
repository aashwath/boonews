import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class NewsService {
  constructor(private http: HttpClient) {}

  api_key: string = "b38700af2f5a48d7859dee1fbb54e62d";
  selectedArticle: {};

  getNews = (newsType: string) => {
    switch (newsType) {
      case "india":
        return this.http.get(
          `https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=${
            this.api_key
          }`
        );
      case "global":
        return this.http.get(
          `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${
            this.api_key
          }`
        );
      case "entertainment":
        return this.http.get(
          `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${
            this.api_key
          }`
        );
      case "business":
        return this.http.get(
          `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${
            this.api_key
          }`
        );
      case "settings":
        break;
    }
  }

  getArticle = (article: {}) => this.selectedArticle = article;
}
