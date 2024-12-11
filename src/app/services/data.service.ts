import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://api.quotable.io/random';

  constructor(private http: HttpClient) {}

getRandomQuote(): Observable<{ content: string; author: string }> {
  return this.http.get<{ content: string; author: string }>(this.apiUrl);
}

}
