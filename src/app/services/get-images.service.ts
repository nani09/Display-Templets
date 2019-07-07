import { Injectable ,Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators' ;
import { Observable, BehaviorSubject} from 'rxjs';
import { ImageModel } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class GetImagesService {
  
  subject = new BehaviorSubject<ImageModel[]>([]);
  postUrl : string = "postUrl";
  constructor( private http :  HttpClient) { 
  }

  getImages() :Observable<ImageModel[]>{
    return this.http.get("assets/response.json").pipe(map(res => res["images"]
    .map((str) => {
      let imageModel = new ImageModel();
      imageModel.imageUrl = str["imageUrl"];
      imageModel.date = str["date"];
      imageModel.doctor = str["doctor"];
      imageModel.patientInfo = str["patientInfo"];
      imageModel.problem = str["problem"];
      imageModel.type = str["type"];
      imageModel.formData = str["formdata"]
      return imageModel;
    })));
  }

  postImage(updatedImage:ImageModel) {
    this.http.post(this.postUrl,updatedImage);
  }

}
