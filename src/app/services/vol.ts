import { Injectable, signal } from '@angular/core';
import { Vol } from '../models/vol';

@Injectable({ providedIn: 'root' })
export class VolService {
  private _vols = signal<Vol[]>([
    { id: 1, numeroVol: 'TU712', compagnie: 'Tunisair', depart: 'Tunis', arrivee: 'Paris',
      dateDepart: '2026-11-10', prix: 450, placesDisponibles: 32 },
    { id: 2, numeroVol: 'BJ501', compagnie: 'Nouvelair', depart: 'Tunis', arrivee: 'Istanbul',
      dateDepart: '2026-11-15', prix: 520, placesDisponibles: 18 },
  ]);

  vols = this._vols.asReadonly();

  getById(id: number) {
    return this._vols().find((v) => v.id === id);
  }

  ajouter(vol: Omit<Vol, 'id'>) {
    const id = Math.max(0, ...this._vols().map((v) => v.id)) + 1;
    this._vols.update((list) => [...list, { ...vol, id }]);
  }

  supprimer(id: number) {
    this._vols.update((list) => list.filter((v) => v.id !== id));
  }
}
