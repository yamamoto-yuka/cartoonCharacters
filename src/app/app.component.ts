import { Component } from '@angular/core';

interface Character {
  id: string;
  name: string;
  movie: string;
  description: string;
  img: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'characters';

  cartoonChars: Character[] = [
    {
      id: 'chat1',
      name: 'Skipper',
      movie: 'Penguins of Madagascar',
      description:
        "Skipper is a major character in the Madagascar franchise. He is the leader of a band of four penguins in the franchise. He is a major character in the first film, Madagascar, a supporting character in Madagascar: Escape 2 Africa, a major character in Madagascar 3: Europe's Most Wanted, the central protagonist of Penguins of Madagascar: The Movie, and the main protagonist of The Penguins of Madagascar TV series.",
      img: 'https://static.wikia.nocookie.net/penguinsofmadagascar/images/2/25/SkipperNew.png',
    },
    {
      id: 'chat2',
      name: 'Private',
      movie: 'Penguins of Madagascar',
      description:
        "Private is a major character of Madagascar, a supporting character in Madagascar: Escape 2 Africa, the central protagonist of The Penguins of Madagascar, a supporting character in Madagascar 3: Europe's Most Wanted, and the main protagonist of Penguins of Madagascar: The Movie.",
      img: 'https://static.wikia.nocookie.net/penguinsofmadagascar/images/7/70/PrivateNew.png',
    },
    {
      id: 'chat3',
      name: 'Elliot',
      movie: 'Open Source',
      description:
        "Elliot is the deuteragonist of the Open Season franchise. He is Boog's best friend, Giselle's husband, Gisela, Giselita, and Elvis' father, and Ursa's adoptive brother-in-law.",
      img: 'https://static.wikia.nocookie.net/openseason/images/2/2d/Open_Season_3_Elliot.png',
    },
  ];

  ariaCurrent(index: number) {
    if (index === 0) return true;
    else return false;
  }
}
