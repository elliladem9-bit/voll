import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { VolService } from '../../services/vol';

@Component({
  selector: 'app-vol-detail',
  imports: [RouterLink],
  templateUrl: './vol-detail.html',
})
export class VolDetail {
  private route = inject(ActivatedRoute);
  private volService = inject(VolService);

  vol = this.volService.getById(Number(this.route.snapshot.paramMap.get('id')));
}
