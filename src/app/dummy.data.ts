export class SongModel {
  titlesong: string;
  artist: string;
  duration: number;
}

export class PlaylistModel {
  titleplaylist: string;
  // lets make on the fly / by calculate
  // totalsong: number;
  // totalduration: number;
  description: string;
  songs: SongModel[];
}

export const CARD_DATA_PLAYLIST: PlaylistModel[] = [
  {
    titleplaylist: 'frz@gmail.com',
    // totalsong: 0,
    // totalduration: 0,
    description: 'Fariz',
    songs: [
      {
        titlesong: 'CPU',
        artist: 'AMD',
        duration: 6
      }, {
        titlesong: 'Motherboard',
        artist: 'MSI Pro',
        duration: 8
      }
    ]
  },
  {
    titleplaylist: 'jui@mail.com',
    // totalsong: 0,
    // totalduration: 0,
    description: 'Jul',
    songs: [
      {
        titlesong: 'Screen',
        artist: 'LCD',
        duration: 6
      }, {
        titlesong: 'Mouse',
        artist: 'Razer',
        duration: 7
      }
    ]
  }
];

// export const CARD_DATA_CONTENT = [
//     {
//         pla
//     }
// ]
