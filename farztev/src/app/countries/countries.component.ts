import { Component, OnInit } from '@angular/core';
import {CountriesService} from '../countries.service';
import {ListCountry} from './listcountry';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  constructor(public countriesService: CountriesService) {
    
  }

  ngOnInit() {
    this.getCountries();
  }

  listcountry: ListCountry[];

  getCountries(): void {
    this.countriesService.getCountries().subscribe(listcountry => { this.listcountry = listcountry; console.log(this.listcountry);});
  }
  ngOnDestroy(): void {
    this.listcountry = null;
  }

}
