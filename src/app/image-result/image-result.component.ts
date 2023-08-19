import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-result',
  templateUrl: './image-result.component.html',
  styleUrls: ['./image-result.component.css']
})
export class ImageResultComponent {
@Input() images:any[]=[];
}
