import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  productionTeam = {
    title: 'The Production Team',
    teams: [
      { name: 'On Stage', roles: ['Cast', 'Chorus', 'Dancers', 'Musicians'] },
      { name: 'Backstage', roles: ['Run Crew', 'Props', 'Wardrobe'] },
      { name: 'House Crew', roles: ['Stage', 'Sound', 'Lighting'] },
      { name: 'Pre-Production', roles: ['Sets', 'Costumes', 'Choreography'] }
    ]
  };

  administrationTeam = {
    title: 'The Administration Team',
    teams: [
      { name: 'Core Functions', roles: ['Prayer and Governance', 'Safety', 'Finance', 'Fundraising'] },
      { name: 'Operations', roles: ['Event Management, Logistics and Catering', 'Communication, Media Content Creation, Digital', 'Ticket Sales and Marketing'] }
    ]
  };
}

