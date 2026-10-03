import { Routes } from '@angular/router';
import { VolList } from './components/vol-list/vol-list';
import { VolForm } from './components/vol-form/vol-form';
import { VolDetail } from './components/vol-detail/vol-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'vols', pathMatch: 'full' },
  { path: 'vols', component: VolList },
  { path: 'vols/nouveau', component: VolForm },
  { path: 'vols/:id', component: VolDetail },
];
