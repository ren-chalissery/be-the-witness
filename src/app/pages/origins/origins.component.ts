import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-origins',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './origins.component.html',
  styleUrl: './origins.component.css'
})
export class OriginsComponent {
  origins = {
    title: 'The Witness',
    subtitle: 'Origins',
    description: [
      'The Witness is a globally staged musical, cherished for its timeless message of redemption, discipleship, and transformation.',
      'At the centre of the story is Peter, portrayed with depth and humanity. His journey of doubt, denial, and eventual devotion gives the audience a moving lens through which to experience the life and ministry of Jesus.',
      'The Witness was written by Jimmy and Carol Owens. Jimmy and Carol are pioneers of Contemporary Christian Music. Their musical praise and prayer presentations \'Come Together\', \'If My People\' and \'Heal Our Land\' have impacted nations. Dramatic musicals — \'Show Me!\', \'The Glory of Christmas\' and \'The Witness\' — have brought thousands to Christ.',
      'The music in The Witness was designed as a tool in presenting the gospel. Many who will not come to hear it preached will come to hear it sung, a fact well recognized by those experienced in ministering through music.'
    ]
  };
}

