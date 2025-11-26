import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  welcome = {
    author: 'Fr Wim Hoekstra',
    title: 'Parish Priest Mary Queen of the Family Parish',
    content: [
      'In one of his first masses, the newly elected Pope Leo XIV drew attention to his role as the Successor of Peter, drawing on the rich treasures of the scriptures and tradition to highlight the role of Peter, especially in the Gospel of Matthew.',
      'Pope Leo began with the famous words of Peter, "You are the Christ, the Son of the living God" (Mt 16:16). With these words, Peter – questioned by the Master, together with the other disciples, about his faith in Him – summarizes the patrimony that the Church has guarded, deepened, and transmitted for two thousand years through apostolic succession, i.e. Jesus is the Christ, the Son of the living God; the only Saviour and the one who reveals the face of the Father.',
      'Pope Leo continues, "In his response, Peter grasps both of these things: the gift of God and the path to be followed in order to be transformed by it." He emphasised the importance of bearing witness, as Peter and the apostles did, to our joyful faith in Christ our Saviour, calling Christians to offer their witness in a world that often finds faith "absurd" and to be "mocked, opposed, despised or at least best tolerated or pitied."',
      'In the production of the musical "The Witness", the Community of Mary Queen of the Family Parish Blacktown, proclaims the Good News and the Gospel of Jesus in a rather nontraditional way – not through preaching or teaching, but through words and song.',
      '"The Witness" not only tells the story of the life of Jesus but does so through the eyes of Peter the apostle and takes us through the highs and lows of this remarkable event in human history.',
      'It is a visual and sensory experience through which the Gospel, the Good News that Jesus is the Christ, the Son of the Living God, is proclaimed.',
      'Our parish community hopes that this experience will help all to a deeper understanding of their faith in Jesus Christ and a commitment to a personal encounter with him, an encounter such as Peter and the disciples which they would proclaim to the ends of the earth.'
    ]
  };
}

