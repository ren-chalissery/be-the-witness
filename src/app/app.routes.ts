import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { OriginsComponent } from './pages/origins/origins.component';
import { SongsComponent } from './pages/songs/songs.component';
import { TeamComponent } from './pages/team/team.component';
import { PrayerComponent } from './pages/prayer/prayer.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'origins', component: OriginsComponent },
  { path: 'songs', component: SongsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'prayer', component: PrayerComponent },
  { path: '**', redirectTo: '' }
];
