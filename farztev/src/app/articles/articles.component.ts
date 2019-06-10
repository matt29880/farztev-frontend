import { Component, OnInit } from '@angular/core';
import {ArticlesService} from './articles.service';
import {ListArticle} from './listarticle';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  constructor(public articlesService: ArticlesService) {
    
  }

  ngOnInit() {
    this.getArticles();
  }

  listarticle: ListArticle[];

  getArticles(): void {
    this.articlesService.getArticles().subscribe(listarticle => { this.listarticle = listarticle; console.log(this.listarticle);});
  }
  ngOnDestroy(): void {
    this.listarticle = null;
  }

}
