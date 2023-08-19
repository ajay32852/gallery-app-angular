import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-single-view-image',
  templateUrl: './single-view-image.component.html',
  styleUrls: ['./single-view-image.component.css']
})
export class SingleViewImageComponent {
  @Input() images: any[] = [];
}
