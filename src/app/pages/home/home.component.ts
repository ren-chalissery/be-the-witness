import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  heroTitle = 'Be The Witness';
  heroSubtitle = 'THE MUSICAL THAT WILL TURN YOUR LIFE AROUND';
  
  experience = {
    title: 'The Witness Experience',
    description: 'A unique opportunity to create and sustain a Christian faith-fuelled movement, uplifting the community in Western Sydney, sharing The Gospel of Christ through music and storytelling.'
  };

  quickLinks = [
    { title: 'Welcome', description: 'Message from Fr Wim Hoekstra', route: '/welcome' },
    { title: 'Origins', description: 'Learn about The Witness musical', route: '/origins' },
    { title: 'Songs', description: 'Experience the music and lyrics', route: '/songs' },
    { title: 'Team', description: 'Meet the production team', route: '/team' },
    { title: 'Prayer', description: 'Together we pray', route: '/prayer' }
  ];

  heroImages = [
    'assets/images/main image.jpeg',
    'assets/images/WhatsApp Image 2025-11-04 at 15.41.28.jpeg',
    'assets/images/WhatsApp Image 2025-11-04 at 15.42.23 (1).jpeg',
    'assets/images/WhatsApp Image 2025-11-04 at 15.42.23.jpeg',
    'assets/images/WhatsApp Image 2025-11-04 at 15.42.24 (1).jpeg',
    'assets/images/WhatsApp Image 2025-11-04 at 15.42.24 (2).jpeg',
    'assets/images/WhatsApp Image 2025-11-04 at 15.42.24 (3).jpeg',
    'assets/images/WhatsApp Image 2025-11-04 at 15.42.24.jpeg',
    'assets/images/WhatsApp Image 2025-11-04 at 15.42.25 (1).jpeg',
    'assets/images/WhatsApp Image 2025-11-04 at 15.42.25.jpeg'
  ];

  currentImageIndex = 0;
  previousImageIndex = -1;
  private imageInterval: any;

  ngOnInit() {
    this.startImageCarousel();
    }

  ngOnDestroy() {
    if (this.imageInterval) {
      clearInterval(this.imageInterval);
    }
  }

  startImageCarousel() {
    this.imageInterval = setInterval(() => {
      this.previousImageIndex = this.currentImageIndex;
      this.currentImageIndex = (this.currentImageIndex + 1) % this.heroImages.length;
    }, 5000); // Change image every 5 seconds
  }
  
  galleryImages = [
    'assets/images/WhatsApp Image 2025-11-04 at 15.41.28.jpeg',
    'assets/images/WhatsApp Image 2025-11-04 at 15.42.23 (1).jpeg',
    'assets/images/WhatsApp Image 2025-11-04 at 15.42.23.jpeg',
    'assets/images/WhatsApp Image 2025-11-04 at 15.42.24 (1).jpeg',
    'assets/images/WhatsApp Image 2025-11-04 at 15.42.24 (2).jpeg',
    'assets/images/WhatsApp Image 2025-11-04 at 15.42.24 (3).jpeg',
    'assets/images/WhatsApp Image 2025-11-04 at 15.42.24.jpeg',
    'assets/images/WhatsApp Image 2025-11-04 at 15.42.25 (1).jpeg',
    'assets/images/WhatsApp Image 2025-11-04 at 15.42.25.jpeg'
  ];

  openImage(imageSrc: string) {
    window.open(imageSrc, '_blank');
      }

  websiteUrl = 'https://www.bethewitness.com.au/';
  qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(this.websiteUrl)}`;
}
