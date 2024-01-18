import { Component } from '@angular/core';

@Component({
  selector: 'app-text-form',
  templateUrl: './text-form.component.html',
  styleUrl: './text-form.component.css'
})
export class TextFormComponent {
  name: string = '';
  age: number = 0;
  favoriteColor: string = '';

  addColor() {
    // Implement logic to add the color to the counter and list
  }
}
