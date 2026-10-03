import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { VolService } from '../../services/vol';

@Component({
  selector: 'app-vol-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './vol-form.html',
})
export class VolForm {
  private fb = inject(FormBuilder);
  private volService = inject(VolService);
  private router = inject(Router);

  form = this.fb.nonNullable.group({
    numeroVol: ['', [Validators.required, Validators.pattern(/^[A-Z]{2}\d{3,4}$/)]],
    compagnie: ['', Validators.required],
    depart: ['', Validators.required],
    arrivee: ['', Validators.required],
    dateDepart: ['', Validators.required],
    prix: [0, [Validators.required, Validators.min(1)]],
    placesDisponibles: [0, [Validators.required, Validators.min(0)]],
  });

  invalide(champ: string) {
    const c = this.form.get(champ);
    return !!c && c.invalid && (c.dirty || c.touched);
  }

  envoyer() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.volService.ajouter(this.form.getRawValue());
    this.router.navigate(['/vols']);
  }
}
