import { Component, OnDestroy, } from '@angular/core';
import { GetImagesService }  from '../services/get-images.service';
import { ActivatedRoute } from '@angular/router';
import { ImageModel } from '../models/image.model';

@Component({
  selector: 'app-xrays',
  templateUrl: './xrays.component.html',
  styleUrls: ['./xrays.component.css']
})
export class XraysComponent implements OnDestroy {
  searchQuery :string="";
  images: ImageModel[] = [];
  constructor(private route: ActivatedRoute,private getImageService:GetImagesService) {
     this.getImageService.subject.subscribe(p => {
       this.images = p;
       console.log(p)
     })
  }

  ngOnDestroy() {
  
  }



}
