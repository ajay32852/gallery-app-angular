import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.css']
})
export class ViewImageComponent implements OnInit {

  searchText: string = '';
  images: any[] = [];
  amount: number = 100;
  apiURL = 'https://pixabay.com/api/';
  apiKey = '28696198-e716d029c7345f28bd166cb54';
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.searchText = params['tags'];
      this.fetchData();
    });
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
