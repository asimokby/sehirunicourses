import { Component, OnInit, Input } from '@angular/core';
import {Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { PdfDownloaderService } from '../../services/pdf-downloader.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @Input() notes;
  constructor(private router:Router, private http: HttpClient, private pdfService: PdfDownloaderService) { }

  ngOnInit() { 
  }

  viewBtn(fileUrl:string, title:string){
    let url = '/file/'+title+ "?fileUrl="+ fileUrl;
    window.open(url, '_blank');
    // this.router.navigate(['/file/'+title], { queryParams: { fileUrl: fileUrl} });
  }
  downloadBtn(fileUrl:string){
    this.pdfService.PdfdownloadBtn(fileUrl);
  }
  
}
