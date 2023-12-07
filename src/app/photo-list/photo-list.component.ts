// photo-list.component.ts

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PhotoService } from '../photo.service';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PhotoModalComponent } from '../photo-modal.component';


@Component({
  selector: 'app-photo-list',
  imports: [MatIconModule, MatTableModule],
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
  standalone: true,
})
export class PhotoListComponent implements OnInit {
  photos: any[] = [];
  dataSource = new MatTableDataSource<any>(this.photos);
  displayedColumns: string[] = ['id', 'title', 'actions'];

  constructor(private photoService: PhotoService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadPhotos();
  }

  openModal(photo: any): void {
    const photoId = photo.id;

    if (photoId) {
      const photoUrl = `https://api.slingacademy.com/v1/sample-data/photos/${photoId}`;

      this.dialog.open(PhotoModalComponent, {
        data: {
          id: photo.id,
          title: photo.title,
          photoUrl: photoUrl,
          
        },
      });
    } else {
      console.error('ID da foto não disponível.');
    }
  }

  loadPhotos() {
    console.log("load fotos...");
    this.photoService.getPhotos(5, 20).subscribe((data: any) => {
      console.log("dados = ", data);

      this.photos = data.photos;
      this.dataSource.data = this.photos;
    });
  }
}
