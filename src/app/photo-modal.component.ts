// photo-modal.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  //styleUrls: ['./photo-modal.component.css'],
})
export class PhotoModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
