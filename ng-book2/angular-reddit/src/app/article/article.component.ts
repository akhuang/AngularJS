import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() {
    // this.article = new Article("a1", "http://a1", 10);
  }

  VoteUp(): boolean {
    this.article.VoteUp();
    return false;
  }

  VoteDown(): boolean {
    this.article.VoteDown();
    return false;
  }

  ngOnInit() {
  }

}
