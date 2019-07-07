import { Component, OnDestroy, } from '@angular/core';
import { GetImagesService }  from '../services/get-images.service';
import { ActivatedRoute } from '@angular/router';
import { ImageModel } from '../models/image.model';

@Component({
  selector: 'app-usgs',
  templateUrl: './usgs.component.html',
  styleUrls: ['./usgs.component.css']
})
export class UsgsComponent implements OnDestroy {

  images: any[] = [];

  constructor(private route: ActivatedRoute,private getImageService:GetImagesService) {
     this.getImageService.subject.subscribe(p => {
       this.images = p;
     })
  }

  ngOnDestroy() {
    
  }

}
