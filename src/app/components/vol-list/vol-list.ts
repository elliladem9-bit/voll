import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VolService } from '../../services/vol';

@Component({
  selector: 'app-vol-list',
  imports: [RouterLink],
  templateUrl: './vol-list.html',
})
export class VolList {
  volService = inject(VolService);
}
