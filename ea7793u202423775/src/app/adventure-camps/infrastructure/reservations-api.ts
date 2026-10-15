import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../domain/model/reservation';
import { enviroment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})

export class ReservationsApi {
  private http = inject(HttpClient);
  private url = `${enviroment.adventureCampApiUrl}/reservations`;

  getAll(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>
    (this.url);

  }

}
