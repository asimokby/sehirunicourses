import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Router } from '@angular/router';
import { PdfDownloaderService } from '../../services/pdf-downloader.service';


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  @Input() assignments;
  constructor(private router:Router, private http: HttpClient, private pdfService: PdfDownloaderService) { }

  ngOnInit() {
  }
    viewBtn(fileUrl:string, title:string){
      let url = '/file/'+title+ "?fileUrl="+ fileUrl;
      console.log(url);
      window.open(url, '_blank');
      // this.router.navigate(['/file/'+title], { queryParams: { fileUrl: fileUrl} });
    }
    downloadBtn(fileUrl:string){
      this.pdfService.PdfdownloadBtn(fileUrl);
    }

 

}
