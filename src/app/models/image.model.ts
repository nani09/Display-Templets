export class ImageModel {
        imageUrl: string;
        type:string;
        problem:string;
        patientInfo:any;
        doctor:string;
        date:string;
        formData: {};

        constructor() {
            this.imageUrl = "";
            this.type= "";
            this.problem= "";
            this.patientInfo = {
                "name":"",
                "id":"",
                "age":""
            };
            this.doctor= "";
            this.date= "";
            this.formData = {
                "date": "",
                "doctor": "",
                "problem": "",
                "medicine": "",
                "courseStartDate": "",
                "courseEndDate": ""
            }
        }
}