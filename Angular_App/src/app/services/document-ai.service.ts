import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { timer, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DocumentAIService {

  constructor(private httpClient: HttpClient) { }

  getBase64(inputFile) {
    const temporaryFileReader = new FileReader();

    return new Promise((resolve, reject) => {
      temporaryFileReader.onerror = (error) => {
        temporaryFileReader.abort();
        console.log('Error: ', error);
        reject(new DOMException("Problem parsing input file."));
      };

      temporaryFileReader.onload = () => {
        let split = temporaryFileReader.result.toString().split(",", 2);
        let result = split[1];
        resolve(result);
      };
      temporaryFileReader.readAsDataURL(inputFile);;
    });

  }



  getPredictions(fileData): Observable<Object> {
    let body = {
      "data": fileData
    }
    const httpOptions = {
      headers: new HttpHeaders({ 
        //'Access-Control-Allow-Origin':'*',
        //'Content-Type': 'text/plain'
      })
    };
    //let url = "http://lending-doc-ai.p01d15204506001.c01.dev.provides.io/v1/document-parsers/w2"
    let url = "/docai/v1/document-parsers/w2"
    
    return this.httpClient.post<Object>(url, body, httpOptions);
  }
}
