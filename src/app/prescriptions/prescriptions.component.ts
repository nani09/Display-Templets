import { Component, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetImagesService }  from '../services/get-images.service';
import { ImageModel } from '../models/image.model'
import { FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.css']
})
export class PrescriptionsComponent implements OnChanges {


  presForm = new FormGroup({
    problem: new FormControl(''),
    medicine: new FormControl(''),
    date: new FormControl(''),
    fromDate: new FormControl(''),
    toDate: new FormControl(''),
    doctor: new FormControl('')
  })
  
  hide : boolean =false;
  images: ImageModel[] = [];
  subscription: Subscription;
  // searchQuery :string="";
  // filteredItems = [];
  prescriptionDate:Date;
  fromDateChange:Date;
  toDateChange:Date;
  imageQualityResult: string;
  isMedicalreport:string;
  doctors = ["select doctor","B","c"];


  constructor(private getImageService:GetImagesService) {
    
     this.getImageService.subject.subscribe(p => {
       this.images = p;
      //  this.filteredItems = p;
     })
    }
  ngOnChanges(){
    
  }

  // search() {
  //   let copyImages = this.images;
  //   this.filteredItems = copyImages.filter( (el) => {
  //     const temp = el["patientInfo"];
  //     if( (temp["name"].toLowerCase().search(this.searchQuery.toLowerCase()) == 0 )|| (temp["id"].toLowerCase().search(this.searchQuery.toLowerCase())) == 0 ){
  //       return el;
  //     }
  //   });
  // }

  onSubmit(image) {
    image.formData["date"] = this.presForm.value['date'];
    image.formData["doctor"] = this.presForm.value['doctor'];
    image.formData["problem"] = this.presForm.value['problem'];
    image.formData["medicine"] = this.presForm.value['medicine']
    image.formData["courseStartDate"] = this.presForm.value['fromDate'];
    image.formData["courseEndDate"] = this.presForm.value['toDate'];
  }

  showForm(image) {
    this.hide = true;
    this.prescriptionDate = new Date(image.formData['date']);
    this.fromDateChange = new Date(image.formData['courseStartDate']);
    this.toDateChange = new Date(image.formData['courseEndDate']);
    this.presForm.patchValue({
      date: this.prescriptionDate,
      problem: image.formData['problem'],
      medicine: image.formData['medicine'],
      doctor: image.formData['doctor'],
      fromDate:this.fromDateChange,
      toDate: this.toDateChange
    })
    
  }
  
  imageQuality(event) {
    this.imageQualityResult = event.value

  }

  isMedical(event) {
    this.isMedicalreport  = event.value;
  }

  pageChanged(event){
    this.hide = false;
  }
}
