import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmModel } from '../model/fimModel';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private url:string;

constructor(private http: HttpClient)
  {
    this.url = 'http://localhost:8080/film';
  }

  public findAll(): Observable<FilmModel[]>
  {
    return this.http.get<FilmModel[]>(this.url + '/all');
  }
}
