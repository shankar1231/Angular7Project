import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ElectronService } from 'ngx-electron';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor(private _electronService: ElectronService) { }

  // @ViewChild('imageData') private imageDataRef: ElementRef;
  ngOnInit() {
    // if(this._electronService) {
    //   console.log(this._electronService)
    //   let pong: string = this._electronService.ipcRenderer.sendSync('ping');
    //   console.log(pong);
    // }
  }
  localUrl: any[];
  uploadfile(event){
    // console.log(this.imageDataRef)
    // console.log(this.imageDataRef.nativeElement)
    // let data = URL.createObjectURL(event.target.files[0]);;
    // this.imageDataRef.nativeElement.src = URL.createObjectURL(event.target.files[0])
   // $("img").fadeIn("fast").attr('src',URL.createObjectURL(event.target.files[0]));
   // console.log(data)
    // if (event.target.files && event.target.files[0]) {
    //   var reader = new FileReader();
    //   reader.onload = (event: any) => {
    //     console.log(event)
    //       this.localUrl = event.target.result;
    //       console.log(this.localUrl)
    //   }
    //   reader.readAsDataURL(event.target.files[0]);
    // }

     
   
  }
  
  submitform(data){
    const formdata = new FormData();
    
    //console.log(data); 
    // for(var val in data){
    //   //console.log(val+' --- '+data[val]);
    //   formdata.append(val,data[val]);
    // }
	
    // for(var i=0;i<this.files.length;i++){
    //       formdata.append('files[]',this.files[i]);
    // }
   

  }

}
