import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText: string = '';
  amount: number = 15;
  apiURL = 'https://pixabay.com/api/';
  apiKey = '28696198-e716d029c7345f28bd166cb54';
  images: any[] = [];
  constructor(private dataService: DataService) { }

  onSearchTextChange(event: any) {
    this.searchText = event.target.value;
  }

  onChangeAmount(event: any) {
    this.amount = event.target.value;
  }

  btnClick() {
    this.fetchData();
  }

  fetchData() {
    this.dataService.getData(this.searchText, this.amount).subscribe(
      (data) => {
        this.images = data.hits;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
