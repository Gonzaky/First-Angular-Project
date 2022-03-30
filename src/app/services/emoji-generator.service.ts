import { Injectable } from '@angular/core';
import {Emoji} from "../Task";
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmojiGeneratorService {
  private apiUrl='http://localhost:5000/emoji';

  getEmoji():Observable<Emoji[]>{

    return this.http.get<Emoji[]>(this.apiUrl)

  }


  constructor(private http:HttpClient) {

  }
}
