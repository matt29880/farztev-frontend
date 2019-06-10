import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../articles/articles.service';
import {MediaService} from '../media/media.service';
import {Article} from '../articles/article';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { ArticleDescription } from '../articles/articleDescription';
import { MediaType } from '../media/mediatype';
import { Media } from '../media/media';
import { AlbumsComponent } from '../albums/albums.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  constructor(public articlesService: ArticlesService, 
    public mediaService: MediaService, 
    private route: ActivatedRoute, 
    private router: Router) {
    
  }

  article: Article;  
  descriptionItems: ArticleDescription[];
  albums = {};

  ngOnInit() {
    this.article = new Article();
    // The JavaScript (+) operator converts the string to a number
    let articleId = +this.route.snapshot.params['id'];
    if (articleId != null) {
      this.getArticle(articleId).subscribe(article => {
        var article = article;
        var items = JSON.parse(article.description);
        items
            .filter(item => item.type == 'album')
            .forEach(item => this.albums[item.albumId] = []);
        this.descriptionItems = items;
        this.article = article;
        this.getMediaFromAlbums();
      });
    }
  }

  getArticle(articleId : number): Observable<Article> {
    return this.articlesService.getArticle(articleId);
  }

  getMediaFromAlbums(){
    this.descriptionItems
        .filter(item => item.type == 'album')
        .forEach(item => { 
          console.log(item.type);
          this.getMediaList(item.albumId)
                              .subscribe(medias => this.albums[item.albumId] = medias)});
  }

  getMediaList(albumId : number): Observable<Media[]> {
    return this.mediaService.getMedias(albumId, MediaType.PHOTO);
  }

  ngOnDestroy(): void {
    this.article = null;
  }

}
