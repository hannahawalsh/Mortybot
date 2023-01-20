import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { timer, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private httpClient: HttpClient) { }

  getPredictions(input): Observable<Object> {
    let body = {
      "dataset_name": "dataset1",
      "question": input,
      "num_matches": 3
    };

    const httpOptions = {
      headers: new HttpHeaders({ 
        //'Access-Control-Allow-Origin':'*',
        //'Content-Type': 'text/plain'
        'Authorization': "Bearer " + ""

      })
    };
      
    return this.httpClient.post<Object>("http://localhost:8000/predict/", body, httpOptions);
  }
}
