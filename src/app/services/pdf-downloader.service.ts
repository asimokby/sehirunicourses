import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as saveAs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class PdfDownloaderService {

  PdfdownloadBtn(url:string){
    var oReq = new XMLHttpRequest();
    // The Endpoint of your server 
    var url:string;
    // Configure XMLHttpRequest
    oReq.open("GET", url, true);
    // Important to use the blob response type
    oReq.responseType = "blob";
    // When the file request finishes
    // Is up to you, the configuration for error events etc.
    oReq.onload = function() {
        // Once the file is downloaded, open a new window with the PDF
        // Remember to allow the POP-UPS in your browser
        var file = new Blob([oReq.response], { 
            type: 'application/pdf' 
        });
        // Generate file download directly in the browser !
        saveAs(file, "mypdffilename.pdf");
    };
    oReq.send();
  }
}
