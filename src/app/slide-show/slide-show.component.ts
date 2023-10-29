import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent {
  @Input() images: string[] = [];
  currentIndex: number = 0;

  get currentImage(): string {
    return this.images[this.currentIndex];
  }

  get prevImage(): string {
    return this.images[(this.currentIndex - 1 + this.images.length) % this.images.length];
  }

  get nextImage(): string {
    return this.images[(this.currentIndex + 1) % this.images.length];
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
