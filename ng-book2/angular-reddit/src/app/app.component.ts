import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  constructor() {
    this.articles = [
      new Article("a1", "http//a1", 10),
      new Article("a2", "http://a2", 10)
    ];
  }
}
