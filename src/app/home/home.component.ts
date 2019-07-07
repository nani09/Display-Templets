import { Component, OnInit } from '@angular/core';
import { GetImagesService } from '../services/get-images.service';
import { ImageModel } from '../models/image.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imagesLis : ImageModel[] = [];
  prescriptionList: ImageModel[] = [];
  mriList: ImageModel[] = [];
  xrayList: ImageModel[] = [];
  bloodreportList: ImageModel[] = [];
  usgList: ImageModel[] = [];
  flag:boolean = false ;
  
  constructor(private getImagesService: GetImagesService) {
   }

  ngOnInit() {
    this.getImagesService.getImages().subscribe( (data) => {
      data.forEach((image) => {
        switch (image.type.trim()) {
          case 'USG':
          this.usgList.push(image);
          break;
          
          case 'Blood report':
          this.bloodreportList.push(image);
          break;
          
          case 'MRI':
          this.mriList.push(image);
          break;
          
          case 'Xray':
          this.xrayList.push(image);
          break;
          
          case 'Prescription':
          this.prescriptionList.push(image)
          break;
          
          default:
          break;
        }
      })
      if(this.xrayList && this.prescriptionList && this.usgList && this.mriList && this.bloodreportList) {
        this.flag = true; 
      }
    })   
  }
  
  sendPres() {
    this.getImagesService.subject.next(this.prescriptionList);     
  }

  sendXray() {
    this.getImagesService.subject.next(this.xrayList);        
  }
  
  sendMri() {
    this.getImagesService.subject.next(this.mriList);        
  }

  sendBloodrep() {
    this.getImagesService.subject.next(this.bloodreportList);        
  }

  sendUsg() {
    this.getImagesService.subject.next(this.usgList);        
  }

  
}
