import { Component, OnDestroy, } from '@angular/core';
import { GetImagesService }  from '../services/get-images.service';
import { ActivatedRoute } from '@angular/router';
import { ImageModel } from '../models/image.model';


@Component({
  selector: 'app-bloodreports',
  templateUrl: './bloodreports.component.html',
  styleUrls: ['./bloodreports.component.css']
})
export class BloodreportsComponent implements OnDestroy{
  hide:boolean = false;
  images: ImageModel[] = [];
  doctors = ["A","B","C"]
  constructor(private route: ActivatedRoute,private getImageService:GetImagesService) {
     this.getImageService.subject.subscribe(p => {
       this.images = p;
     })
  }


  ngOnDestroy() {
   
  }

  showForm(image){
    this.hide=true;
  }


}
