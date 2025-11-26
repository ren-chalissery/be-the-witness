import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
export class SongsComponent {
  songs = [
    {
      title: 'Make Me Like You',
      lyrics: [
        'Lord, make me like You, Please make me like You,',
        'You are a servant, make me one too.',
        'Oh Lord, I am willing, Do what You must do',
        'To make me like You, Lord, Just make me like You.'
      ],
      quote: 'He began to teach all of us what it takes to be a great man in the kingdom of God. He said, "Among the heathen, the kings are tyrants and each minor official lords it over those beneath him. But among you it is quite different. Anyone wanting to be a leader among you must be your servant. And if you want to be right at the top, you must serve like a slave. Your attitude must be like My own, for I, the Messiah, did not come to be served, but to serve, and to give My life as a ransom for many."'
    },
    {
      title: 'He Came in Love',
      lyrics: [
        'Pure and holy Son of God, taking on the form of man;',
        'Left the glory of His throne, came to bring salvation\'s plan.',
        'Righteous Father, Holy One, looking down on us in love;',
        'Gave to us His only Son, sent with blessings from above.',
        '',
        'But we took Him and we nailed Him to a cross made of wood,',
        'And we raised it high and dropped it in the ground where it stood;',
        'And the blood that flowed to the earth below',
        'Bought forgiveness for the world that had treated Him so.',
        '',
        '"Peace on earth, Good will to men," at His birth the angels sang,',
        'Love and mercy from the throne through the earth His message rang.',
        '',
        'He came in love to bring us light in our darkness,',
        'He came in peace to bring release from our pain;',
        'He came with joy to bring us rest in our weariness,',
        'He came in love to bring us beauty again.'
      ]
    },
    {
      title: 'The Victor',
      lyrics: [
        'It is finished! He has done it!',
        'Life conquered death, Jesus Christ has won it!',
        '',
        'He was alive! We had Him back with us!',
        'We were beside ourselves with joy!',
        'This was going to change the whole world! …except that it seemed He wasn\'t planning on staying.',
        'He was going to leave and transfer all the power, and all the responsibility for preaching His gospel to us. The Shepherd was leaving, and He left the flock in our care.',
        '',
        'If you\'d failed Him the way I had, how would you have felt when He said,"Peter, do you love Me?',
        'If you love Me, feed My sheep."'
      ]
    },
    {
      title: 'Come to the Life Giver!',
      lyrics: [
        'Who is this who has life to give? Who is this who tells the dead to live?',
        'Not an ordinary man but one who dares to say',
        'That He is the Resurrection and the Life',
        'And then offers it to you and me.',
        'Come to the Life Giver! And let Him pour His life on you!'
      ]
    },
    {
      title: 'You are the Christ',
      lyrics: [
        'Who am I? What are they saying? Do they know the truth or are they blind?',
        'Who am I? What do you call Me?',
        'Tell Me, what is My name? You are the Christ,',
        'The Son of the Living God! I say You are the Christ, The Son of the Living God!',
        'You are the Christ!',
        'You are the Lord!'
      ]
    },
    {
      title: 'I\'ll be Your witness',
      lyrics: [
        'So if You find it in Your heart to let me start again,',
        'I\'ll be Your witness Lord, Your witness Lord,',
        'Your witness to the end of my life.',
        'Let me make it right, let me try again,',
        'I\'ll be Your witness to the end.',
        '',
        'Listen to me! This is for you!',
        'I\'ve come to tell you a story that\'s true;',
        'A story \'bout a special Man that I knew',
        'The Son of God has come!',
        'The Son of God has come',
        '',
        'And I\'m a witness!',
        'I\'m a witness!'
      ]
    }
  ];
}

