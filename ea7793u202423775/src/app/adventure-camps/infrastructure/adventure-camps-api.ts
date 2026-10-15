import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdventureCamp } from '../domain/model/adventure-camp';
import {enviroment} from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})

export class AdventureCampsApi {
  private http = inject(HttpClient);
  private url = `${enviroment.adventureCampApiUrl}/adventure-camps`;

  getAll(): Observable<AdventureCamp[]> {
    return this.http.get<AdventureCamp[]>
    (this.url);
  }
}
