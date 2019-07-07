import { Component, OnDestroy, } from '@angular/core';
import { GetImagesService }  from '../services/get-images.service';
import { ActivatedRoute } from '@angular/router';
import { ImageModel } from '../models/image.model';



@Component({
  selector: 'app-mris',
  templateUrl: './mris.component.html',
  styleUrls: ['./mris.component.css']
})
export class MrisComponent implements OnDestroy {

  images: ImageModel[] = [];

  constructor(private route: ActivatedRoute,private getImageService:GetImagesService) {
     this.getImageService.subject.subscribe(p => {
       this.images =p;
     })
  }

  ngOnDestroy() {
  }

}
