import { Component, OnInit } from '@angular/core';
import {AlbumsService} from './albums.service';
import {ListAlbum} from './listalbum';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  constructor(public albumsService: AlbumsService) {
    
  }

  ngOnInit() {
    this.getAlbums();
  }

  listalbum: ListAlbum[];

  getAlbums(): void {
    this.albumsService.getAlbums().subscribe(listalbum => { this.listalbum = listalbum; console.log(this.listalbum);});
  }
  ngOnDestroy(): void {
    this.listalbum = null;
  }

}
