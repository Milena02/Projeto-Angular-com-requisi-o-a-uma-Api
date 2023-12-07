// app.component.ts

import { Component } from '@angular/core';
import { PhotoService } from './photo.service';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <app-photo-list></app-photo-list>
  `,
  styleUrls: ['./app.component.css'],
  providers: [PhotoService],
  imports: [
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatTableModule,
    PhotoListComponent,
    HttpClientModule
  ],
  standalone: true, 
})
export class AppComponent {
  title = 'photo-gallery';
}
