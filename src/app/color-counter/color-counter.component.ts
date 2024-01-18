import { Component } from '@angular/core';

@Component({
  selector: 'app-color-counter',
  templateUrl: './color-counter.component.html',
  styleUrl: './color-counter.component.css'
})
export class ColorCounterComponent {
  colorCount: number = 0;
  colorList: string[] = [];

  addColor(color: string) {
    this.colorCount++;
    this.colorList.push(color);
  }
}
