import { Injectable, inject, signal } from '@angular/core';
import { AdventureCampsApi } from '../infrastructure/adventure-camps-api';
import { AdventureCamp } from '../domain/model/adventure-camp';

@Injectable({
  providedIn: 'root'

})

export class AdventureCampsStore {
  private adventureCampsApi = inject(AdventureCampsApi);
  camps = signal<AdventureCamp[]>([]);
  loadCamps(): void {
    this.adventureCampsApi.getAll().subscribe({
      next: (data) => {
        this.camps.set(data);
      }
    });
  }
}
