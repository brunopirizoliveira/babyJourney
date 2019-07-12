import { Component, OnInit } from '@angular/core';

import { ImageService } from '../image/image.service';
import { Image } from '../image/image';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})

export class ImageListComponent implements OnInit {
  
  images: Image[] = [];
  userName: string = 'flavio';

  constructor(
    private activatedRoute: ActivatedRoute, 
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.images = this.activatedRoute.snapshot.data['images'];    
  }

  load() {

    this.imageService
      .listFromUser(this.userName)
      .subscribe(images => this.images = this.images.concat(images));
  }
  
}
