import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { AlbumsComponent } from './albums/albums.component';
import { ArticlesComponent } from './articles/articles.component';
import { NavComponent } from './nav/nav.component';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'article/:id', component: ArticleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    AlbumsComponent,
    ArticlesComponent,
    ArticleComponent,
    HomeComponent,
    NavComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
