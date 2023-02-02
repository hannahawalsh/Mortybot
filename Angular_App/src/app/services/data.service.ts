import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getData(accountId): Observable<Object> {
    return this.httpClient.get<Object>("http://localhost:5000/estatement_predictions/?users=" + accountId);
  }
}
