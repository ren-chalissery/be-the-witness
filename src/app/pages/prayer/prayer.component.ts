import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prayer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prayer.component.html',
  styleUrl: './prayer.component.css'
})
export class PrayerComponent {
  prayer = {
    title: 'Together we Pray',
    content: [
      'Heavenly Father,',
      '',
      'You sent Your only begotten Son, Jesus Christ, to live among us, and to bring salvation to the world by His Death and Resurrection.',
      '',
      'You sent Your Holy Spirit on the Church to begin the teaching of the Gospel. May the Spirit continue to work in the world through the hearts of all who believe.',
      '',
      'Thank you for calling us to know You, to love You and to serve You, and to be Your Witness.',
      '',
      'Keep our hearts humble, and may our work in this mission be our prayer to You, our service to the community and our gratitude for the gifts and talents that You have given us.',
      '',
      'Help us put aside anything that is not of You and give us whatever You will to make us like You.',
      '',
      'We ask this through Christ our Lord, Amen'
    ]
  };
}

