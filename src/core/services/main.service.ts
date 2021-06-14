/* https://opentdb.com/api_config.php
https://opentdb.com/api.php?amount=5&type=multiple */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Object>{
    return this.http.get(`${environment.remoteQUrl}`);
  }
}
