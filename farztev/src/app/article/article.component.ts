import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../articles/articles.service';
import {Article} from '../articles/article';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { ArticleDescription } from '../articles/articleDescription';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  constructor(public articlesService: ArticlesService, 
    private route: ActivatedRoute, 
    private router: Router) {
    
  }

  article: Article;  
  descriptionItems: ArticleDescription[];

  ngOnInit() {
    // The JavaScript (+) operator converts the string to a number
    let articleId = +this.route.snapshot.params['id'];
    if (articleId != null) {
      this.getArticle(articleId).subscribe(article => { this.article = article; this.descriptionItems = JSON.parse(this.article.description);});
    }
  }

  getArticle(articleId : number): Observable<Article> {
    return this.articlesService.getArticle(articleId);
  }

  ngOnDestroy(): void {
    this.article = null;
  }

}
