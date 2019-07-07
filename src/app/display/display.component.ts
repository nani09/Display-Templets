import { Component, OnInit , Input } from '@angular/core';
import { ImageModel } from '../models/image.model';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  @Input() image : ImageModel;
  constructor() { }

  ngOnInit() {
  }

  update(image){  // To update image properties

  }
}
