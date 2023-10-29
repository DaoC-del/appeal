import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.css']
})
export class Module1Component implements OnInit {
  slideGifs: string[] = [
    // 'assets/gifs/1.gif',
    // 'assets/gifs/2.gif',
    // 'assets/gifs/3.gif',
    // // ...其他图片URL
  ];
  textValue: string = ''; // 初始化为空字符串
  isDisabled: boolean = false; // 初始化为 false
  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.getImages().subscribe(data => {
      this.slideGifs = data.images;
    });
  }
}
